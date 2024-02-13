import express from "express";
import { createInquiry, getEnquiry } from "./inquiryController.js";

const router = express.Router();

router.route("/").get(getEnquiry).post(createInquiry);

export default router;
