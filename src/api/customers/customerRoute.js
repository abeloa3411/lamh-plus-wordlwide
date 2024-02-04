import express from "express";
import { getCustomers } from "./customerController.js";

const router = express.Router();

router.route("/customers").get(getCustomers);
