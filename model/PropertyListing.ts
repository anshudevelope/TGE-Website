import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPropertyListing extends Document {
  yourName: string;
  mobileNumber: string;
  email?: string;
  userRole: "Owner" | "Authorised Agent";
  propertyType: string;
  locality: string;
  areaSize: number;
  areaUnit: "sq ft" | "sq yd" | "biswa" | "bigha";
  bedrooms?: string;
  expectedPrice: number;
  priceNegotiable: boolean;
  ownershipType?: "Freehold" | "Leasehold" | "Power of Attorney" | "Other";
  propertyPhotos: string[];
  additionalDetails?: string;
  consent: boolean;
  createdAt: Date;
}

const PropertyListingSchema: Schema<IPropertyListing> = new Schema(
  {
    yourName: { type: String, required: true, trim: true },
    mobileNumber: { type: String, required: true, match: /^[6-9]\d{9}$/ },
    email: { type: String, trim: true, lowercase: true },
    userRole: { type: String, enum: ["Owner", "Authorised Agent"], required: true },
    propertyType: { type: String, required: true },
    locality: { type: String, required: true },
    areaSize: { type: Number, required: true },
    areaUnit: { type: String, enum: ["sq ft", "sq yd", "biswa", "bigha"], required: true },
    bedrooms: { type: String },
    expectedPrice: { type: Number, required: true },
    priceNegotiable: { type: Boolean, default: false },
    ownershipType: { type: String, enum: ["Freehold", "Leasehold", "Power of Attorney", "Other"] },
    propertyPhotos: [{ type: String }],
    additionalDetails: { type: String, maxlength: 150 },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const PropertyListing: Model<IPropertyListing> =
  mongoose.models.PropertyListing || mongoose.model<IPropertyListing>("PropertyListing", PropertyListingSchema);

export default PropertyListing;