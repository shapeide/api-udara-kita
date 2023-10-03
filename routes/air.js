import express from "express";
import { extractData } from "../controllers/air.js";
const router = express.Router();

router.get("/extract", extractData);

export default router;
