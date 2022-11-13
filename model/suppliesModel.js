import mongoose from "mongoose";

const suppliemodel = mongoose.Schema({
  MainImage: {
    data: Buffer,
    contentType: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  Like: {
    type: Boolean,
  },
  EventType: {
    type: String,
  },
  where: {
    type: String,
  },
  guests: {
    type: String,
  },
  PricePerServing: {
    type: String,
  },
  when: {
    type: Array,
  },
  cosher: {
    type: String,
  },
  location: {
    type: String,
  },
  number: {
    type: String,
  },
  website: {
    type: String,
  },
  concept: {
    type: Array,
  },
  imageCover: {
    type: Array,
  },
});

export default mongoose.model("supplies", suppliemodel);
