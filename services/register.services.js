import Users from "../model/UsersModel.js";

///@ route    POST /register
const registerServices = async (password, name, email) => {
  //Checking  it exists in the database by email
  const existingUser = await Users.find({ email: email });
  if (existingUser.length === 0) {
    const setUsers = await Users.create({
      name: name,
      email: email,
      password: password,
    });
    return { message: "create user" };
  } else {
    return { message: "user is exist" };
  }
};

export { registerServices };
