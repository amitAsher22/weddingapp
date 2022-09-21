import {
  registrationServices,
  login,
} from "../services/authentication/auth.js";
import { validationResult } from "express-validator";
import { createToken } from "../services/authentication/auth.js";
import jwt from "jsonwebtoken";

/**
 *  * ROTER - POST - http://localhost:8000/register
 * A function that takes 3 parameters from the req.body and performs validation according to the conditions I decided (express-validator)
 * Sending the mongodb parameters (registration )
 * @param {string} name
 * @param {string} password
 * @param {string} email
 * @returns
 */
const registerUser = async (req, res) => {
  try {
    const error = validationResult(req);
    const { password, name, email } = req.body;
    const resultFromServices = await registrationServices(
      password,
      name,
      email,
      error
    );

    res.json({ result: resultFromServices });
  } catch (error) {
    res.json({ "register error": error });
  }
};

/**
 * * * ROTER - POST - http://localhost:8000/login/login
 * A function that takes 3 parameters from the req.body and performs validation according to the conditions I decided (express-validator)
 *  * Sending the mongodb parameters (login )
 * @param {string} name
 * @param {string} password
 * @returns
 */
const loginUsers = async (req, res) => {
  const { email, password } = req.body;
  const error = validationResult(req);
  if (error.errors.length > 0) {
    return res.json({ error });
  }
  const result = await login(email, password);

  res.cookie("jwt", result, {
    withCrdentials: true,
    httpOnly: false,
  });

  res.json({ result });
};

const verifyJWT = async (req, res) => {
  const { email, password } = req.body;
  const setToken = await createToken(email, password);
  if (!setToken) {
    res.json({
      message: "you we need token , please give it us next time",
    });
  } else {
    jwt.verify(setToken, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ message: "U faild to auth" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

export { registerUser, loginUsers, verifyJWT };
