import mongoose, { Schema, Document, Model } from 'mongoose';
import { Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface userId {
  userId: any
}
interface IProfessional extends Document {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string[];
  email: string[];
  password: string;
  profilePhoto?: string;
  linkedIn?: string;
  sex: string;
  maritalStatus: string;
  dependents: number;
  countryOfResidence: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
  }[];
  citizenship: string[];
  bio?: string;
  education: {
    institution: string;
    city: string;
    country: string;
    degreeLevel: string;
    attendedFrom: Date;
    attendedTo?: Date;
    degreeName: string;
    attachment: string;
  }[];
  languages: {
    name: string;
    native: boolean;
    proficiency: string;
  }[];
  skills: {
    name: string;
    proficiency: string;
  }[];
  certifications: {
    courseName: string;
    issuingOrganization: string;
    dateOfCertification: Date;
    attachment: string;
  }[];
  trainings: {
    trainingName: string;
    issuingOrganization: string;
    dateOfTraining: Date;
    attachment: string;
  }[];
  experience: {
    positionTitle: string;
    from: Date;
    to?: Date;
    employerName: string;
    employerAddress: string;
    typeOfOrganization: string;
    country: string;
    responsibilities: string;
    supervisorName: string;
    skills: string[];
    sectors: string[];
  }[];
  volunteerExperience?: {
    positionTitle: string;
    from: Date;
    to?: Date;
    employerName: string;
    employerAddress: string;
    typeOfOrganization: string;
    country: string;
    responsibilities: string;
    supervisorName: string;
    skills: string[];
    sectors: string[];
  }[];
  sectorInterests: string[];
  deployment: {
    preferredType: string;
    responseTime: string;
    extendedAssignments: string;
    idealEmploymentLength: string;
  };
  travelReadiness: {
    willingToTravel: boolean;
    passport: {
      passportNumber: string;
      dateOfIssue: Date;
      expiryDate: Date;
      attachments: string[];
    }[];
    vaccination?: {
      name: string;
      attachment: string;
      dateOfIssue: Date;
    }[];
    nearestAirport: {
      name: string;
      city: string;
      country: string;
    };
    drivingLicense?: {
      licenseNumber: string;
      dateOfIssue: Date;
      expiryDate: Date;
      attachment: string;
    };
  };
  emergencyContact: {
    firstName: string;
    middleName?: string;
    lastName: string;
    relationship: string;
    phoneNumber: string;
  };
  workRegions: string[];
  source: string;
  abuse: boolean;
  disability: boolean;
  healthInformation: {
    medicalConditions?: string;
    medications?: string;
    allergies?: string;
    physical?: string;
    mental?: string;
  };
  motivationStatement: string;
  resume: string;
  references: {
    fullName: string;
    country: string;
    organization: string;
    phoneNumber: string;
    email: string;
    referenceJobTitle: string;
    website?: string;
  }[];
  attachments?: string[];
  comparePassword(enteredPassword: string): Promise<boolean>;
  setJwtToken({userId}:userId, res: Response): void;
}

const ProfessionalSchema: Schema<IProfessional> = new Schema<IProfessional>({
  firstName: { type: String, required: true, trim: true },
  middleName: { type: String, trim: true },
  lastName: { type: String, required: true, trim: true },
  dateOfBirth: { type: Date },
  phoneNumber: { type: [String], required: true },
  email: { type: [String], required: true, unique: true },
  password: { type: String, required: true },
  profilePhoto: { type: String },
  linkedIn: { type: String },
  sex: { type: String, enum: ['Male', 'Female', 'Other'] },
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Other'] },
  dependents: { type: Number },
  countryOfResidence: [{
    line1: { type: String, required: true },
    line2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  }],
  citizenship: { type: [String], required: true },
  bio: { type: String },
  education: [{
    institution: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    degreeLevel: { type: String, required: true },
    attendedFrom: { type: Date, required: true },
    attendedTo: { type: Date },
    degreeName: { type: String, required: true },
    attachment: { type: String },
  }],
  languages: [{
    name: { type: String, required: true },
    native: { type: Boolean, required: true },
    proficiency: { type: String, required: true },
  }],
  skills: [{
    name: { type: String, required: true },
    proficiency: { type: String, required: true },
  }],
  certifications: [{
    courseName: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    dateOfCertification: { type: Date, required: true },
    attachment: { type: String },
  }],
  trainings: [{
    trainingName: { type: String, required: true },
    issuingOrganization: { type: String, required: true },
    dateOfTraining: { type: Date, required: true },
    attachment: { type: String },
  }],
  experience: [{
    positionTitle: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date },
    employerName: { type: String, required: true },
    employerAddress: { type: String, required: true },
    typeOfOrganization: { type: String, required: true },
    country: { type: String, required: true },
    responsibilities: { type: String, required: true },
    supervisorName: { type: String, required: true },
    skills: { type: [String], required: true },
    sectors: { type: [String], required: true },
  }],
  sectorInterests: { type: [String], required: true },
  deployment: {
    preferredType: { type: String, required: true },
    responseTime: { type: String, required: true },
    extendedAssignments: { type: String, required: true },
    idealEmploymentLength: { type: String, required: true },
  },
  travelReadiness: {
    willingToTravel: { type: Boolean, required: true },
    passport: [{
      passportNumber: { type: String, required: true },
      dateOfIssue: { type: Date, required: true },
      expiryDate: { type: Date, required: true },
      attachments: { type: [String], required: true },
    }],
    vaccination: [{
      name: { type: String, required: true },
      attachment: { type: String, required: true },
      dateOfIssue: { type: Date, required: true },
    }],
    nearestAirport: {
      name: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    drivingLicense: {
      licenseNumber: { type: String },
      dateOfIssue: { type: Date },
      expiryDate: { type: Date },
      attachment: { type: String },
    },
  },
  emergencyContact: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    relationship: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  workRegions: [{ type: String, required: true }],
  source: { type: String, required: true },
  abuse: { type: Boolean, required: true },
  disability: { type: Boolean, required: true },
  motivationStatement: { type: String, required: true },
  resume: {
    type: String,
    required: true
  },
  references: [{
    fullName: { type: String, required: true },
    country: { type: String, required: true },
    organization: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    referenceJobTitle: { type: String, required: true },
  }],
  attachments: [{ type: String }],
});
// Methods
ProfessionalSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};
ProfessionalSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password || "123456", 10);
  }
  next();
})
ProfessionalSchema.methods.setJwtToken = function ({userId}:userId, res: Response): void {
  console.log(userId);
  const token = jwt.sign({ userId }, process.env.JWTSK || "17181919", { expiresIn: '1d' });
  res.cookie('jwt', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
  });//add renewal token
};

const Professional: Model<IProfessional> = mongoose.model<IProfessional>('Professional', ProfessionalSchema);
export default Professional;
