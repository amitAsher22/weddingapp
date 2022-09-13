import express from "express";
import { authValidation } from "../validation/authValidation.js";

import { registerUser, loginUsers } from "../controllers/RegisterController.js";

const routers = express.Router();

routers.post("/", authValidation, registerUser);
routers.post("/login", loginUsers);

export default routers;
