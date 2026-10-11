import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import PropertyListing from "@/model/PropertyListing";
import { DEFAULT_LISTING_STATUS } from "@/lib/adminOptions";
import { parsePagination, escapeRegex, statusCondition, countByStatus } from "@/lib/listQuery";

const SORT_OPTIONS: Record<string, Record<string, 1 | -1>> = {
  newest: { createdAt: -1 },
  oldest: { createdAt: 1 },
  "price-high": { expectedPrice: -1 },
  "price-low": { expectedPrice: 1 },
};

// GET LISTINGS (Admin List View) — paginated, filterable
// Query params: page, limit, status, propertyType, userRole, search, sort
export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const { page, limit, skip } = parsePagination(searchParams);

    const status = searchParams.get("status");
    const propertyType = searchParams.get("propertyType");
    const userRole = searchParams.get("userRole");
    const search = searchParams.get("search")?.trim();
    const sort = SORT_OPTIONS[searchParams.get("sort") || ""] || SORT_OPTIONS.newest;

    // Filters shared by the list and the per-status counts
    const baseMatch: Record<string, unknown> = {};
    if (propertyType) baseMatch.propertyType = propertyType;
    if (userRole) baseMatch.userRole = userRole;
    if (search) {
      const pattern = new RegExp(escapeRegex(search), "i");
      baseMatch.$or = [{ yourName: pattern }, { mobileNumber: pattern }, { email: pattern }, { locality: pattern }];
    }

    const listMatch = status
      ? { $and: [baseMatch, statusCondition(status, DEFAULT_LISTING_STATUS)] }
      : baseMatch;

    const [listings, total, counts] = await Promise.all([
      PropertyListing.find(listMatch).sort(sort).skip(skip).limit(limit).lean(),
      PropertyListing.countDocuments(listMatch),
      countByStatus(PropertyListing, baseMatch, DEFAULT_LISTING_STATUS),
    ]);

    return NextResponse.json({
      success: true,
      data: listings.map((listing) => ({ ...listing, status: listing.status || DEFAULT_LISTING_STATUS })),
      pagination: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
      counts,
    });
  } catch (error: any) {
    console.error("GET Listings Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

// BULK DELETE LISTINGS (Admin Action)
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide an array of listing IDs to delete." },
        { status: 400 }
      );
    }

    const result = await PropertyListing.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({
      success: true,
      message: `${result.deletedCount} listing(s) deleted successfully!`,
      deletedCount: result.deletedCount,
    });
  } catch (error: any) {
    console.error("Bulk Delete Listings Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to bulk delete listings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot spam check
    if (body.website_hp) {
      return NextResponse.json({ message: "Bot detected" }, { status: 400 });
    }

    // Connect to MongoDB
    await dbConnect();

    // Validate backend mandatory fields
    const requiredFields = ["yourName", "mobileNumber", "userRole", "propertyType", "locality", "areaSize", "areaUnit", "expectedPrice"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    if (!body.consent) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 });
    }

    // Save record to DB via Model
    const newListing = await PropertyListing.create({
      yourName: body.yourName,
      mobileNumber: body.mobileNumber,
      email: body.email,
      userRole: body.userRole,
      propertyType: body.propertyType,
      locality: body.locality,
      areaSize: Number(body.areaSize),
      areaUnit: body.areaUnit,
      bedrooms: body.bedrooms,
      expectedPrice: Number(body.expectedPrice),
      priceNegotiable: body.priceNegotiable,
      ownershipType: body.ownershipType,
      propertyPhotos: body.propertyPhotos || [],
      additionalDetails: body.additionalDetails,
      consent: body.consent,
    });

    return NextResponse.json({ success: true, id: newListing._id }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}