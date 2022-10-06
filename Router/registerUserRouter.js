import express from "express";
// import { authValidation } from "../validation/RegisterValidation.js";
// import { loginUserValidation } from "../validation/loginValidation.js";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";
import { verify } from "../controllers/RegisterController.js";

const routers = express.Router();

routers.post("/register", registerUser);
routers.post("/login", verify, loginUsers);

export default routers;
