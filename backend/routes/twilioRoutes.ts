import express from "express";
import { sendSMSVerificationCode, sendEmailVerificationCode } from "../controllers/twilioController";

const router = express.Router();

router.post("/sendSMSVerificationCode", sendSMSVerificationCode);
router.post("/sendEmailVerificationCode", sendEmailVerificationCode);

export default router