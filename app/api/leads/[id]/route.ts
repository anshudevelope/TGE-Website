import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Lead from "@/model/Lead";

// 1. GET SINGLE LEAD
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const lead = await Lead.findById(params.id);

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

// 2. UPDATE LEAD DETAILS OR CHANGE STATUS
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const body = await request.json();

        const updatedLead = await Lead.findByIdAndUpdate(params.id, body, {
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
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const deletedLead = await Lead.findByIdAndDelete(params.id);

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