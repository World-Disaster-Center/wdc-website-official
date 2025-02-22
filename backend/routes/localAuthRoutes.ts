import express from "express"
import protectRoute from "../protectRoutes/localProtectRoute"
import { preRegisterLocal, registerLocal, preLoginLocal, loginLocal, updateProfileLocal } from "../controllers/authLocalController"

const router = express.Router();

router.post("/register", registerLocal);
router.post("/login", loginLocal);
router.post("/preRegister", preRegisterLocal);
router.post("/preLogin", preLoginLocal);
router.post("/updateProfile", protectRoute, updateProfileLocal)


export default router