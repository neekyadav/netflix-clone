import express from "express";
import { servertest } from "../controllers/servertest.controller.js";


const router = express.Router();

router.get("/test1", servertest);

export default router;