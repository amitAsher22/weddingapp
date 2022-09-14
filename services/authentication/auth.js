import Users from "../../model/UsersModel.js";
import loginModel from "../../model/loginModel.js";

///@ route    POST /register
const registration = async (password, name, email) => {
  /** Checking if the user exists into MongoDB */
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

const login = async (name, password) => {
  const resultLogin = await loginModel.create({
    name,
    password,
  });

  return resultLogin;
};

export { registration, login };
