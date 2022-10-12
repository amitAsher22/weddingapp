import mongoose from "mongoose";

const eventCard = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  location: {
    type: String,
  },
  nameEvent: {
    type: String,
  },
  description: {
    type: String,
  },
  likes: {
    type: Boolean,
  },
});

export default mongoose.model("EventCard", eventCard);
