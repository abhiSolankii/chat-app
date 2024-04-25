import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
// import dotenv from "dotenv";
// dotenv.config();
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded);
    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token Provided" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    // console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute.js :", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
