import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
    name: string;
    city: string;
    phone: string;
    email?: string;
    queryType: string;
    message?: string;
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
    },
    { timestamps: true }
);

const Lead: Model<ILead> =
    mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;