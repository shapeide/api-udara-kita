import { Router } from "express";
import { searchByCity } from "../controllers/air.js";
const router = Router();

router.post("/searchByCity", searchByCity);

export default router;
