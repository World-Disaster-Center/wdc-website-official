import mongoose, { Document, Schema, Model } from 'mongoose';


interface IOrganization extends Document {
    firstName: string;
    lastName: string;
    email: string;
    organizationName: string;
    organizationWebsite?: string;
    partnershipInterests: string[];
    message: string;
}

const OrganizationSchema: Schema<IOrganization> = new mongoose.Schema<IOrganization>({
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

const Organization: Model<IOrganization> = mongoose.model<IOrganization>('Organization', OrganizationSchema);

export default Organization;