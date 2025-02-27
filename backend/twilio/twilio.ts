import { Response } from "express";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
export const sendSMSVerificationCode = async (phoneNumber:string, res:Response):Promise<void> => {
  try {
      const client = twilio(accountSid, authToken);
      await client.verify.v2.services(process.env.TWILIO_SERVICE_SID || "undefined value")
        .verifications
        .create({to: phoneNumber, channel: 'sms'})
      res.status(201).json("Code has been successfully sent");
    } catch (error:any) {
      res.status(400).json(error.message);
    }
}
export const checkSMSVerificationCode = async (phoneNumber:string, code:string):Promise<boolean> => {
  try{
    const client = twilio(accountSid, authToken);
    const result = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID || "undefined value").verificationChecks.create({to: phoneNumber, code: code})
    if(result.status === "approved"){
      return true;
    } else {
      return false;
    }
  }catch(error){
    return false;
  }
}
export const sendVerificationEmail = async (email:string, res:Response):Promise<void> => {
  try {
      const client = twilio(accountSid, authToken);
      await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID || "undefined value")
      .verifications.create({
        channel: "email",
        to: email,
      });
      res.status(201).json("Code has been successfully to your email");
    } catch (error:any) {
      res.status(400).json(error.message);
    }
}
export const checkEmailVerificationCode = async (email:string, code:string):Promise<boolean> => {
  try{
      const client = twilio(accountSid, authToken);
      const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID || "undefined value")
      .verificationChecks.create({
        code: code,
        to: email,
      });
      if(verificationCheck.status === "approved"){
        return true;
      } else {
        return false;
      }
  }catch{
    return false;
  }
}