import express from "express";
import { authValidation } from "../validation/RegisterValidation.js";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";

const routers = express.Router();

routers.post("/register", authValidation, registerUser);
routers.post("/login", loginUsers);

export default routers;
