import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default mongoose.model("login", loginSchema);
