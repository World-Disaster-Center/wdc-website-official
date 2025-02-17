import mongoose, { Document, Schema, Model } from 'mongoose';
import { Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface userId {
  userId: any
}
interface ILocal extends Document {
  firstName: string;
  middleName?: string;
  lastName: string;
  email?: string;
  password?: string;
  profilePhoto?: string;
  role: string; // local
  profileStatus: string; // incomplete, inprogress, completed
  dob: Date;
  phoneNumber: string[];
  sex: string;
  maritalStatus: string;
  numberOfDependents: number;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
  };
  validIDPassport?: string[];
  languages: {
    name: string;
    proficiency: string;
  }[];
  emergencyContact: {
    firstName: string;
    middleName?: string;
    lastName: string;
    relationship: string;
    phoneNumber: string;
  };
  additionalInfo?: string;
  comparePassword(enteredPassword: string): Promise<boolean>;
  setJwtToken(): void;
}

const localSchema: Schema<ILocal> = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 32 },
    middleName: { type: String, trim: true, maxlength: 32 },
    lastName: { type: String, required: true, trim: true, maxlength: 32 },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
    },
    password: { type: String, required: true, minlength: 6 },
    profilePhoto: { type: String },
    role: { type: String, default: 'local' }, // Changed to 'local' as per naming
    profileStatus: { type: String, enum: ['incomplete', 'inprogress', 'completed'], default: 'incomplete' },
    dob: { type: Date },
    phoneNumber: { type: [String], required: true },
    sex: { type: String, enum: ['Male', 'Female', 'Other'] },
    maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Other'] },
    numberOfDependents: { type: Number, default: 0 },
    address: {
      line1: { type: String, required: true },
      line2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
    },
    validIDPassport: { type: [String], default: [] },
    languages: [
      {
        name: { type: String, required: true },
        proficiency: { type: String, required: true },
      },
    ],
    emergencyContact: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
      relationship: { type: String, required: true },
      phoneNumber: { type: String, required: true },
    },
    additionalInfo: { type: String },
  },
  { timestamps: true }
);

// Compare user password
localSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};
localSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password || "123456", 10);
  }
  next();
})
// Generate JWT Token
localSchema.methods.setJwtToken = function ({userId}:userId, res: Response): void {
  const token = jwt.sign({ userId }, process.env.JWTSK || "17181919", { expiresIn: '1d' });
  res.cookie('jwt', token, {
      // httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'strict',
      // maxAge: 24 * 60 * 60 * 1000
  });
};

const Local: Model<ILocal> = mongoose.model<ILocal>('Local', localSchema);

export default Local;
