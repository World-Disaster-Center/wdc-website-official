import express from "express";
import { sendVerificationCode } from "../controllers/twilioController";

const router = express.Router();

router.post("/sendVerificationCode", sendVerificationCode);

export default router