import eventServices from "../services/Card/eventCardServices.js";

const createEventCard = async (req, res) => {
  const { category, image, location, nameEvent, description, likes } = req.body;

  const result = await eventServices.eventCardServices(
    category,
    image,
    location,
    nameEvent,
    description,
    likes
  );
  res.json({ result });
};

const getCards = async (req, res) => {
  const result = await eventServices.getCardEvent();
  res.json(result);
};

const updateEventCard = async (req, res) => {
  const cardId = req.params.id;
  const body = req.body;

  const result = await eventServices.updateEventCard(cardId, body);
  res.json(result);
};

const deleteCard = async (req, res) => {
  const id = req.params.id;
  const result = await eventServices.deleteCard(id);
  res.json(result);
};

const getCardByCategory = async (req, res) => {
  const category = req.query.category;
  const result = await eventServices.CardByCategory(category);
  res.json(result);
};

export default {
  createEventCard,
  getCards,
  updateEventCard,
  deleteCard,
  getCardByCategory,
};
