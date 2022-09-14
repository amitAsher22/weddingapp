import { registration, login } from "../services/authentication/auth.js";

import { validationResult } from "express-validator";

const registerUser = async (req, res) => {
  try {
    const error = validationResult(req);
    const { password, name, email } = req.body;
    const result = await registration(password, name, email);

    if (error.errors.length > 0) {
      return res.send(error.errors);
    }
    res.json({ result });
    // return res.send(result);
  } catch (error) {
    console.log("register error", error);
  }
};

//@ route    POST /login
const loginUsers = async (req, res) => {
  try {
    const error = validationResult(req);
    const { name, password } = req.body;
    const result = await login(name, password);

    if (error.errors.length > 0) {
      return res.send(error.errors);
    }
    return res.send(result);
  } catch (error) {
    console.log("login error", error);
  }
};

export { registerUser, loginUsers };
