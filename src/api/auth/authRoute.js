import express from "express";
import { userLogin, userSignup } from "./authController.js";

const router = express.Router();

router.route("/login").post(userLogin);
router.route("/signup").post(userSignup);

export default router;
