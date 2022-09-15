import express from "express";
import router from "./Router/registerUserRouter.js";
import connectDB from "./configDB/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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

app.use("/register", router);
app.use("/login", router);

app.listen(port, () => {
  console.log(`my server running ${port}`);
});
