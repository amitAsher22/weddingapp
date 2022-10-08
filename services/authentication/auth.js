import Users from "../../model/UsersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUsersRegister = async (bcryptPasword, name, email) => {
  try {
    const createUser = await Users.create({
      name: name,
      email: email,
      password: bcryptPasword,
    });
    return createUser;
  } catch (error) {
    return "error , user log in not created , try again", error;
  }
};

/**
 * ROTER - POST - http://localhost:8000/register
 * A function receives 3 parameters and checks if the user exists in the database and if not it is created in Mongo
 * the test according to the (email) !
 * @param {string} password
 * @param {string} name
 * @param {string} email
 *
 */
const registrationServices = async (password, name, email, error) => {
  const bcryptPasword = await bcrypt.hash(password, 10);
  const user = await Users.find({ email });

  if (user.length == []) {
    const user = await createUsersRegister(bcryptPasword, name, email);
    return { user: user, Msgsuccessful: "successful" };
  } else if (error.errors.length > 0) {
    return error;
  } else if (user.length > 0) {
    return { errorMsg: "The user exists in the system" };
  }
};

/**
 * * ROTER - POST - http://localhost:8000/login/login
 * Creates and saves into mongoDB
 * @param {string} name
 * @param {string} password
 */
const login = async (email, password) => {
  try {
    const user = await Users.find({ email });
    if (user.length > 0) {
      const token = await createToken(user);
      return { user: user, token, message: "register success" };
    } else {
      return { messageError: "not found user" };
    }
  } catch (error) {
    console.log(error);
  }
};

const createToken = async (user) => {
  return jwt.sign({ user }, process.env.MY_SECRET_TOKEN, { expiresIn: "1h" });
};

export { registrationServices, login };
