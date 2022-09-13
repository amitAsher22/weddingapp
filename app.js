import express from "express";
// import router from "./Router/userRouter.js";
import router from "./Router/registerUserRouter.js";
// import loginRouter from "./Router/registerUserRouter.js";

import connectDB from "./configDB/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

/// connect mongoDB
connectDB();

const app = express();
const port = 8000;

/// app use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app router
// app.use("/users", router);

// register router
app.use("/register", router);
app.use("/login", router);

app.listen(port, () => {
  console.log(`my server running ${port}`);
});
