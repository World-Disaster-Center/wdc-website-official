import mongoose, { Document, Schema, Model } from "mongoose";

interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactSchema: Schema<IContact> = new mongoose.Schema<IContact>({
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
  message: {
    type: String,
    required: true,
  },
});

const Contact: Model<IContact> = mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;