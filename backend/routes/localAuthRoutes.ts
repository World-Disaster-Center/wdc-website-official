import express from "express"
import { registerLocal, loginLocal } from "../controllers/authLocalController"

const router = express.Router();

router.post("/register", registerLocal);
router.post("/login", loginLocal);

export default router