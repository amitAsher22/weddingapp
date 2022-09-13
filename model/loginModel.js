import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.model("login", loginSchema);
