import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Lead from "@/model/Lead";
import { DEFAULT_LEAD_STATUS } from "@/lib/adminOptions";
import { parsePagination, escapeRegex, statusCondition, countByStatus } from "@/lib/listQuery";

// 1. GET LEADS (Admin List View) — paginated, filterable
// Query params: page, limit, status, queryType, search, sort (newest | oldest)
export async function GET(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const { page, limit, skip } = parsePagination(searchParams);

        const status = searchParams.get("status");
        const queryType = searchParams.get("queryType");
        const search = searchParams.get("search")?.trim();
        const sortOrder = searchParams.get("sort") === "oldest" ? 1 : -1;

        // Filters shared by the list and the per-status counts
        const baseMatch: Record<string, unknown> = {};
        if (queryType) baseMatch.queryType = queryType;
        if (search) {
            const pattern = new RegExp(escapeRegex(search), "i");
            baseMatch.$or = [{ name: pattern }, { phone: pattern }, { email: pattern }, { city: pattern }];
        }

        const listMatch = status
            ? { $and: [baseMatch, statusCondition(status, DEFAULT_LEAD_STATUS)] }
            : baseMatch;

        const [leads, total, counts] = await Promise.all([
            Lead.find(listMatch).sort({ createdAt: sortOrder }).skip(skip).limit(limit).lean(),
            Lead.countDocuments(listMatch),
            countByStatus(Lead, baseMatch, DEFAULT_LEAD_STATUS),
        ]);

        return NextResponse.json({
            success: true,
            data: leads.map((lead) => ({ ...lead, status: lead.status || DEFAULT_LEAD_STATUS })),
            pagination: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
            counts,
        });
    } catch (error: any) {
        console.error("GET Leads Error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to fetch leads" },
            { status: 500 }
        );
    }
}

// 2. CREATE NEW LEAD (Public Lead Form)
export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { name, city, phone, email, queryType, message } = body;

        if (!name || !phone || !queryType) {
            return NextResponse.json(
                { success: false, message: "Please fill in all required fields (Name, Phone, Query Type)." },
                { status: 400 }
            );
        }

        const newLead = await Lead.create({
            name,
            city: city || "Prayagraj",
            phone,
            email,
            queryType,
            message,
        });

        return NextResponse.json(
            { success: true, message: "Lead submitted successfully!", data: newLead },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("API Lead Submission Error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

// 3. BULK DELETE LEADS (Admin Action)
export async function DELETE(request: Request) {
    try {
        await dbConnect();
        const { ids } = await request.json();

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return NextResponse.json(
                { success: false, message: "Please provide an array of lead IDs to delete." },
                { status: 400 }
            );
        }

        const result = await Lead.deleteMany({ _id: { $in: ids } });

        return NextResponse.json({
            success: true,
            message: `${result.deletedCount} lead(s) deleted successfully!`,
            deletedCount: result.deletedCount,
        });
    } catch (error: any) {
        console.error("Bulk Delete Leads Error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to bulk delete leads" },
            { status: 500 }
        );
    }
}
