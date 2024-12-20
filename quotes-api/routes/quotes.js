import { get } from "mongoose";
import express from "express";
import getQuotes from "../controllers/quotes.js";

const router = express.Router();

router.route("/").get(getQuotes);

export default router;