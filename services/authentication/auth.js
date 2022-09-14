import Users from "../../model/UsersModel.js";
import loginModel from "../../model/loginModel.js";
import bcrypt from "bcrypt";

/**
 * ROTER - POST - http://localhost:8000/register
 * A function receives 3 parameters and checks if the user exists in the database and if not it is created in Mongo
 * the test according to the (email) !
 * @param {string} password
 * @param {string} name
 * @param {string} email
 */
const registration = async (password, name, email) => {
  const getAllUsers = await Users.find({ email });
  if (getAllUsers.length === 0) {
    const createuser = await Users.create({
      name: name,
      email: email,
      password: password,
    });
    return "create users";
  } else {
    return "axist alrady";
  }
};

/**
 * * ROTER - POST - http://localhost:8000/login/login
 * Creates and saves into mongoDB
 * @param {string} name
 * @param {string} password
 *
 */
const login = async (name, password) => {
  const bcryptPasword = await bcrypt.hash(password, 10);
  const resultLogin = await loginModel.create({
    name,
    password: bcryptPasword,
  });

  return resultLogin;
};

export { registration, login };
