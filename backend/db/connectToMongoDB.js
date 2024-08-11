import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDB = async () => {
  try {
    dotenv.config();
    await mongoose.connect(process.env.MONGO_DB_URI);
    // await mongoose.connect(
    //   "mongodb+srv://abhisheksolanki01010:dYpt3lnma0ueqcqJ@chat-app.vhwobu8.mongodb.net/?retryWrites=true&w=majority&appName=chat-app"
    // );

    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Error connecting mongodb: ", error.message);
  }
};
export default connectToMongoDB;
