import express from "express";
import { signup, login, logout,authCheck } from "../controllers/auth.controller.js";
// import {protectRoute} from "../middleware/protectRoute.js";
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;

// starter code

// import express from "express";
// import { signup, login, logout } from "../controllers/auth.controller.js";

// const router = express.Router();

// router.get("/signup", signup);

// router.get("/login", login);

// router.get("/logout", logout);

// export default router;