import express from "express";
import { check } from "express-validator";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/RegisterController.js";

const router = express.Router();

router.post(
  "/",
  [
    check("email", "Please provide avalid email").isEmail(),
    check(
      "password",
      "Please provide a password that is greater than 5 characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
