import Users from "../../model/UsersModel.js";
import loginModel from "../../model/loginModel.js";

///@ route    POST /register
const registration = async (password, name, email) => {
  const setUsers = await Users.create({
    name: name,
    email: email,
    password: password,
  });

  return setUsers;
};

const login = async (name, password) => {
  const resultLogin = await loginModel.create({
    name,
    password,
  });

  return resultLogin;
};

export { registration, login };
