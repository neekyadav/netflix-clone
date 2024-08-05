import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.route.js";
import testRoutes from "./routes/test.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import protectRoute from "./middleware/protectRoute.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();
app.use(express.json()); //will allow us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);


//

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
  connectDB();
});

// starter code

// import express from "express";
// import authRoutes from "./routes/auth.routes.js";

// const app = express();

// app.use("/api/v1/auth", authRoutes);

// app.listen(5000, () => {
//   console.log("server started at http://localhost:5000");
// });
