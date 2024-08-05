import express from "express";
import {
	getSimilarTvs,
	getTrendingTv,
	getTvDetails,
	getTvsByCategory,
	getTvTrailers,
  serverTest
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);
router.get("/test12", serverTest);

export default router;
