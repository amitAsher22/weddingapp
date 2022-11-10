import mongoose from "mongoose";

const events = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  MainImage: {
    type: Buffer,
    require: true,
  },
  when: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  Like: {
    type: Boolean,
    require: true,
  },
  EventType: {
    type: String,
    require: true,
  },
  where: {
    type: String,
    require: true,
  },
  guests: {
    type: String,
    require: true,
  },
  PricePerServing: {
    type: String,
    require: true,
  },
  cosher: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  number: {
    type: String,
    require: true,
  },
  website: {
    type: String,
    require: true,
  },
  concept: {
    type: String,
    require: true,
  },
  imageCover: {
    type: Buffer,
    require: true,
  },
});

export default mongoose.model("Menu", events);
