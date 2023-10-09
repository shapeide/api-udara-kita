import { Router } from "express";
import { searchByCity } from "../controllers/air.js";
const router = Router();

router.get("/extract", searchByCity);

export default router;
