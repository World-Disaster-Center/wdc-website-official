import mongoose, { Document, Schema, Model } from 'mongoose';


interface Organization extends Document {
    firstName: string;
    lastName: string;
    email: string;
    organizationName: string;
    organizationWebsite?: string;
    partnershipInterests: string[];
    message: string;
}

const OrganizationSchema: Schema<Organization> = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    organizationName: {
        type: String,
        required: true,
    },
    organizationWebsite: {
        type: String,
    },
    partnershipInterests: {
        type: [String],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

export const Organization: Model<Organization> = mongoose.model<Organization>('Organization', OrganizationSchema);