import { NextFunction, Request, Response } from "express";
import Local from "../models/localModel";

export const registerLocal = async (req: Request, res: Response):Promise<any> => {
    const { email, name, password } = req.body;
    try {
        const userExist = await Local.findOne({ email });
        if (userExist) {
            return res.status(400).json("E-mail already registered");
        }
        const user = await Local.create({
            email,
            name,
            password
        });

        res.cookie("jwt",user.setJwtToken());
        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        res.json(error);
    }
};

export const loginLocal = async (req: Request, res: Response):Promise<any> => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(403).json("Please add an email");
        }
        if (!password) {
            return res.status(403).json("Please add a password");
        }
        
        const user = await Local.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid credentials");
        }
        
        const isValid = await user.comparePassword(password)
        if (!isValid) {
            return res.status(400).json("Invalid credentials");
        }

        res.cookie("jwt",user.setJwtToken())
        res.status(200).json("Successfully logged in")
    } catch (error) {
        res.status(400).json(error)
    }
};
export const completeProfile = async (req: Request, res: Response):Promise<any> => {
    try {
        const { education, skills, type, name, dob, image, contact, bio, country, state, town, address, profession } = req.body;
        
        res.status(200).json({ success: true, message: "Profile completed" });
    } catch (error) {
        res.status(400).json(error)
    }
}
