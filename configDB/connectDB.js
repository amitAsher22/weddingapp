import mongoose from "mongoose";

const connectdb = async () => {
  const url = process.env.MONGO_URI;
  mongoose.connect(url);
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("mongoDB DataBase connection :)");
  });
};

export default connectdb;
