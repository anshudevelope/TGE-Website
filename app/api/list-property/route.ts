import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import PropertyListing from "@/model/PropertyListing";

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