import Contact from "../models/contactModel";
import { Request, Response } from "express";

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    // Destructure request body
    const { firstName, lastName, email, message } = req.body;
    // Check if all fields are present
    if (!firstName || !lastName || !email || !message) {
        res.status(400).json({ status: "Error", error: "Missing fields." });
        return;
    }
    // Create new contact
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });
    // Save contact
    await contact.save();
    // Send response
    res.status(201).json({ success: true, contact });
  } catch (error) {
    // Send error
    res.status(500).json({ message: "Internal server error." });
  }
};
