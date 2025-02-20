import express from "express";
import protectRoute from "../protectRoutes/professionalProtectRoute";
import { registerProfessional, loginProfessional, updateProfileProfessional } from "../controllers/authProfessionalController";

const router = express.Router();

router.post("/register", registerProfessional);
router.post("/login", loginProfessional);
router.post("/updateProfile", protectRoute, updateProfileProfessional)

export default router;