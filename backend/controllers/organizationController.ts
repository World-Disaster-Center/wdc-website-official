import { Request, Response } from "express";
import Organization from "../models/organizationModel";

export const createOrganization = async (req: Request, res: Response):Promise<void> => {
  try {
    const { firstName, lastName, email, organizationName, organizationWebsite, partnershipInterests, message } = req.body;
    
    if (!firstName || !lastName || !email || !organizationName || !partnershipInterests || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const emailRegexTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
    if(!emailRegexTest.test(email)){
        res.status(403).json("Please check your email")
        return;
    }

    const organization = await Organization.create(
      {
        firstName,
        lastName,
        email,
        organizationName,
        organizationWebsite,
        partnershipInterests,
        message
      }
    );
    res.status(201).json(organization);
  } catch (error) {
    res.status(400).json(error);
  }
}