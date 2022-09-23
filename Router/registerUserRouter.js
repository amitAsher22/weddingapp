import express from "express";
import { authValidation } from "../validation/RegisterValidation.js";
import { loginUserValidation } from "../validation/loginValidation.js";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";

const routers = express.Router();

routers.post("/register", authValidation, registerUser);
routers.post("/login", loginUserValidation, loginUsers);

export default routers;
