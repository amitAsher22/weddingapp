import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import Users from "../model/UsersModel.js";

const createUsersRegister = async (bcryptPasword, name, email) => {
    const createUser = await Users.create({
      name: name,
      email: email,
      password: bcryptPasword,
    });
    return createUser;
  };
  
  /**
   * ROTER - POST - http://localhost:8000/register
   * A function receives 3 parameters and checks if the user exists in the database and if not it is created in Mongo
   * the test according to the (email) !
   * @param {string} password
   * @param {string} name
   * @param {string} email
   */
   export const registration = async (password, name, email, next) => {
    console.log('params', password, name, email);
  
    const bcryptPasword = await bcrypt.hash(password, 10);
  
    const user = await Users.find({ email });
    if (user.length > 0) {
      throw new Error("User already exists!");
    }
    if (!user || user.length <= 0) {
      const user = await createUsersRegister(bcryptPasword, name, email);
      const token = createToken(user);
      const userAndToken = {...user._doc, token};
      console.log("userAndToken", userAndToken);
      return userAndToken;
    }  
  };

  export const createToken = (user) => {
    const signJWT = JWT.sign({ user }, process.env.MY_SECRET, {
      expiresIn: "1H",
    });
  
    return signJWT;
  };
  

  