import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import PropertyListing from "@/model/PropertyListing";
import { LISTING_STATUSES } from "@/lib/adminOptions";

// 1. GET SINGLE LISTING
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const listing = await PropertyListing.findById(id);

        if (!listing) {
            return NextResponse.json(
                { success: false, message: "Listing not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: listing });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Server Error" },
            { status: 500 }
        );
    }
}

// 2. CHANGE LISTING STATUS
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const { status } = await request.json();

        // Only the status is editable from the admin panel
        if (!LISTING_STATUSES.includes(status)) {
            return NextResponse.json(
                { success: false, message: `Status must be one of: ${LISTING_STATUSES.join(", ")}.` },
                { status: 400 }
            );
        }

        const updatedListing = await PropertyListing.findByIdAndUpdate(id, { status }, {
            new: true,
            runValidators: true,
        });

        if (!updatedListing) {
            return NextResponse.json(
                { success: false, message: "Listing not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Listing updated successfully!",
            data: updatedListing,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Failed to update listing" },
            { status: 500 }
        );
    }
}

// 3. DELETE SINGLE LISTING
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const deletedListing = await PropertyListing.findByIdAndDelete(id);

        if (!deletedListing) {
            return NextResponse.json(
                { success: false, message: "Listing not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Listing deleted successfully!",
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Failed to delete listing" },
            { status: 500 }
        );
    }
}
