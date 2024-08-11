import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // const token = jwt.sign(
    //   { userId },
    //   "YI3/dIr1I0+kTL+xoUWDpxfq+CAJwxx4UmtqFM0w0fQ=",
    //   {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //MS
    httpOnly: true, //to prevent XSS attacks
    sameSite: "Strict",
    secure: process.env.NODE_ENV !== "development",
    // secure: "development",
  });
};

export default generateTokenAndSetCookie;
