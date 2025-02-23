import express, { RequestHandler } from "express";
import { sendVerificationCode as sendVerification } from "../twilio/twilio";

export const sendVerificationCode:RequestHandler = async (req: express.Request, res: express.Response):Promise<void> => {
  try{
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      res.status(403).json("Please fill all the mandatory fields");
      return;
    }
    //Phone Number Syntax Validation
    const phoneRegexTest = /^(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/
    if(!phoneRegexTest.test(phoneNumber)){
        res.status(403).json("Please check your phone number")
        return;
    } 
    await sendVerification(phoneNumber, res);
  } catch (error) {
    res.status(400).json(error);
  }
}