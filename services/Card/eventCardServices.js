import EventCard from "../../model/eventCardModel.js";

const eventCardServices = async (
  category,
  image,
  location,
  nameEvent,
  description,
  likes
) => {
  try {
    const createCardEvent = await EventCard.create({
      category,
      image,
      location,
      nameEvent,
      description,
      likes,
    });
    return createCardEvent;
  } catch (error) {
    console.log(error);
  }
};

const getCardEvent = async () => {
  try {
    const allCards = await EventCard.find();
    return allCards;
  } catch (error) {
    console.log(error);
  }
};

const updateEventCard = async (id, body) => {
  try {
    const updateCard = await EventCard.findByIdAndUpdate(id, body);
    return updateCard;
  } catch (error) {
    console.log(error);
  }
};

const deleteCard = async (id) => {
  try {
    const deleteOneCard = await EventCard.remove({ _id: id });
    return deleteOneCard;
  } catch (error) {
    console.log(error);
  }
};

const CardByCategory = async (category) => {
  try {
    const getCardByCategory = await EventCard.find({ category });
    return getCardByCategory;
  } catch (error) {
    console.log(error);
  }
};

const getLikesCards = async (likes) => {
  try {
    const getLikesCards = await EventCard.find({ likes });
    return getLikesCards;
  } catch (error) {
    console.log(error);
  }
};

export default {
  eventCardServices,
  getCardEvent,
  updateEventCard,
  deleteCard,
  CardByCategory,
  getLikesCards,
};
