import express from "express";
import { authValidation } from "../validation/authValidation.js";
import { loginUserValidation } from "../validation/loginValidation.js";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";
import { checkUser } from "../services/authentication/auth.js";

const routers = express.Router();

routers.get("*", checkUser);
routers.post("/", authValidation, registerUser);
routers.post("/login", loginUserValidation, loginUsers);

export default routers;
