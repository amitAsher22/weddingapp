import express from "express";
import router from "./Router/registerUserRouter.js";
import routerEvent from "./Router/EventCardRouter.js";
import connectDB from "./configDB/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
app.use(
  cookieParser({
    name: "sessiontwo",
    keys: ["key1", "key2"],
  })
);
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);
app.use("/", routerEvent);

app.listen(port, () => {
  console.log(`my server running ${port}`);
});
