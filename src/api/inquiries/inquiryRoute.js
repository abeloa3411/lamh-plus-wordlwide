import express from "express";
import { getEnquiry } from "./inquiryController.js";

const router = express.Router();

router.route("/enquiries").get(getEnquiry);

export default router;
