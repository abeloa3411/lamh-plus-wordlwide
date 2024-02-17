import express from "express";
import {
  createShipper,
  getShippers,
  getSingleShipper,
} from "./shipperController.js";

const router = express.Router();

router.route("/").get(getShippers).post(createShipper);
router.route("/:id").get(getSingleShipper);

export default router;
