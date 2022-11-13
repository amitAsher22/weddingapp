import express from "express";
import router from "./Router/Router.js";
import connectDB from "./configDB/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`my server running port :${port}`);
});
