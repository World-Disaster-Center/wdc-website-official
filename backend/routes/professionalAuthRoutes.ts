import express from "express";
import { registerProfessional, loginProfessional } from "../controllers/authProfessionalController";

const router = express.Router();

router.post("/register", registerProfessional);
router.post("/login", loginProfessional);

export default router;