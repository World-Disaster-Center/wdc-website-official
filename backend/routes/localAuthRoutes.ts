import express from "express"
import protectRoute from "../protectRoutes/localProtectRoute"
import { registerLocal, loginLocal, updateProfileLocal } from "../controllers/authLocalController"

const router = express.Router();

router.post("/register", registerLocal);
router.post("/login", loginLocal);
router.post("/updateProfile", protectRoute, updateProfileLocal)


export default router