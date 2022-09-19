import express from "express";
import registrationRouter from "./Router/registerUserRouter";
import userRouter from "./Router/userRouter";
import connectDB from "./configDB/connectDB";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

/**
 * connect to MongoDB
 */
connectDB();

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/", registrationRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`my server running ${port}`);
});
