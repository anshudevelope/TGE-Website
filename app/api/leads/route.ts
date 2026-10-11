import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Lead from "@/model/Lead";

// 1. GET ALL LEADS (Admin List View)
export async function GET(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const statusFilter = searchParams.get("status");

        const query = statusFilter ? { status: statusFilter } : {};
        const leads = await Lead.find(query).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, count: leads.length, data: leads });
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