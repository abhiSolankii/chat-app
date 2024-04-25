import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();
app.use(express.json()); //to parse incoming info with json payloads
app.use(cookieParser());
const PORT = process.env.PORT || 5001; // Use process.env.PORT if available, otherwise default to 5001

app.get("/", function (req, res) {
  res.send("Hello guys");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started on port ${PORT}`);
});
