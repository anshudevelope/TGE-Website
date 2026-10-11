import mongoose, { Schema, Document, Model } from "mongoose";
import { LEAD_STATUSES, DEFAULT_LEAD_STATUS, type LeadStatus } from "@/lib/adminOptions";

export interface ILead extends Document {
    name: string;
    city: string;
    phone: string;
    email?: string;
    queryType: string;
    message?: string;
    status: LeadStatus;
    createdAt: Date;
}

const LeadSchema: Schema<ILead> = new Schema(
    {
        name: { type: String, required: true },
        city: { type: String, required: true, default: "Prayagraj" },
        phone: { type: String, required: true },
        email: { type: String },
        queryType: { type: String, required: true },
        message: { type: String },
        status: { type: String, enum: LEAD_STATUSES, default: DEFAULT_LEAD_STATUS, index: true },
    },
    { timestamps: true }
);

// In development, drop the cached model so schema edits apply without a server restart
if (process.env.NODE_ENV !== "production" && mongoose.models.Lead) {
    mongoose.deleteModel("Lead");
}

const Lead: Model<ILead> =
    mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
