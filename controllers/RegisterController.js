import { registration, login } from "../services/authentication/auth.js";
import { validationResult } from "express-validator";

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

/**
 * * * ROTER - POST - http://localhost:8000/login/login
 * A function that takes 3 parameters from the req.body and performs validation according to the conditions I decided (express-validator)
 *  * Sending the mongodb parameters (login )
 * @param {string} name
 * @param {string} password
 * @returns
 */
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
