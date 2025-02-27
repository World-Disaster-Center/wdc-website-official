import { Request, RequestHandler, Response } from "express";
import { checkSMSVerificationCode } from "../twilio/twilio";
import Local from "../models/localModel";

export const registerLocal:RequestHandler = async (req: Request, res: Response):Promise<void> => {
    //Destructure request body
    const { firstName, lastName, phoneNumber, code } = req.body;
    try {
        if (!firstName || !lastName || !phoneNumber || !code) {
            res.status(403).json("Please fill all the mandatory fields");
            return;
        }
        // Check if the verification code the user provided is valid
        const validCode = await checkSMSVerificationCode(phoneNumber, code)
        if(!validCode){
            res.status(400).json("Invalid code");
            return;
        }
        // Check if user exist by checking phoneNumber and if that phoneNumber is verified
        const userExist = await Local.findOne({phoneNumber: {$elemMatch: {phoneNumber: phoneNumber, verified: true}}});
        if (userExist) {
            res.status(400).json("PhoneNumber already registered");
            return;
        }
        // Create new user
        const newUser = await Local.create({
            firstName,
            lastName,
            phoneNumber:{
                phoneNumber: phoneNumber,
                verified: true
            },
        });
        //Set JWT Token
        res.cookie("jwt",newUser.setJwtToken({userId: newUser._id}, res));
        //Save user
        await newUser.save();
        //Send response
        res.status(201).json("Successfully registered");
    } catch (error) {
        //Send error
        res.json(error);
    }
};
export const loginLocal = async (req: Request, res: Response):Promise<void> => {
    //Destructure request body
    const { phoneNumber, code } = req.body;
    try {
        //Check if the verification code the user provided is valid
        const validCode = await checkSMSVerificationCode(phoneNumber, code)
        if(!validCode){
            res.status(400).json("Invalid code");
            return;
        }
        //Check if user exist by checking phoneNumber and if that phoneNumber is verified and returns the user
        const user = await Local.findOne({ phoneNumber: {$elemMatch: {number: phoneNumber, verified: true}} });
        if (!user) {
            res.status(400).json("Invalid credentials");
            return;
        }
        //Set JWT Token
        res.cookie("jwt",user.setJwtToken({userId: user._id}, res));
        //Send response
        res.status(200).json("Successfully logged in");
    } catch (error) {
        //Send error
        res.status(400).json(error)
    }
};
export const updateProfileLocal = async (req: Request, res: Response):Promise<void> => {
    try {
        //Extend type user to include _id
        interface expressUser extends Express.User {
            _id: string
        }
        const user = req.user as expressUser
        //Check if user exists
        if(!user){
            res.status(401).json({error:"Not Authorized"});
            return;
        }
        //Destructure request body
        const updateData = req.body;
        //Remove unAuthorized fields
        const unAuthorizedFields = ["email", "phoneNumber", "profileStatus", "password", "role", "createdAt", "updatedAt", "__v",];
        for (const field of unAuthorizedFields) {
            delete updateData[field];
        }
        //Find User and update user
        const updatedUser = await Local.findByIdAndUpdate(user._id, updateData, {
            runValidators: true
        });
        //If user was not found send error
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        //Send response
        res.status(200).json({ message: "Profile updated successfully"});
    } catch (error) {
        res.status(400).json(error)
    }
}
 
