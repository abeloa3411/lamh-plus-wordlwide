import express from "express";
import {
  createRecipient,
  getRecipient,
  getSingleRecipient,
} from "./recipientController.js";

const router = express.Router();

router.route("/").get(getRecipient).post(createRecipient);
router.route("/:id").get(getSingleRecipient);

export default router;
