import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Lead from "@/model/Lead";
import { LEAD_STATUSES } from "@/lib/adminOptions";

// 1. GET SINGLE LEAD
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const lead = await Lead.findById(id);

        if (!lead) {
            return NextResponse.json(
                { success: false, message: "Lead not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: lead });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Server Error" },
            { status: 500 }
        );
    }
}

// 2. CHANGE LEAD STATUS
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const { status } = await request.json();

        // Only the status is editable from the admin panel
        if (!LEAD_STATUSES.includes(status)) {
            return NextResponse.json(
                { success: false, message: `Status must be one of: ${LEAD_STATUSES.join(", ")}.` },
                { status: 400 }
            );
        }

        const updatedLead = await Lead.findByIdAndUpdate(id, { status }, {
            new: true,
            runValidators: true,
        });

        if (!updatedLead) {
            return NextResponse.json(
                { success: false, message: "Lead not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Lead updated successfully!",
            data: updatedLead,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Failed to update lead" },
            { status: 500 }
        );
    }
}

// 3. DELETE SINGLE LEAD
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const deletedLead = await Lead.findByIdAndDelete(id);

        if (!deletedLead) {
            return NextResponse.json(
                { success: false, message: "Lead not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Lead deleted successfully!",
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Failed to delete lead" },
            { status: 500 }
        );
    }
}