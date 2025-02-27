import express, { RequestHandler } from "express";
import { sendSMSVerificationCode as sendVerification, sendVerificationEmail } from "../twilio/twilio";

export const sendSMSVerificationCode:RequestHandler = async (req: express.Request, res: express.Response):Promise<void> => {
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
export const sendEmailVerificationCode = async (req: express.Request, res: express.Response):Promise<void> => {
  try{
    const { email } = req.body;

    const emailRegexTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
    if(!emailRegexTest.test(email)){
        res.status(403).json("Please check your email")
        return;
    }

    if (!email) {
      res.status(403).json("Please fill all the mandatory fields");
      return;
    }

    await sendVerificationEmail(email, res);
  } catch (error) {
    res.status(400).json(error);
  }
}