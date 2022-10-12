import express from "express";
import eventController from "../controllers/eventCardController.js";

const routers = express.Router();

routers.post("/createEvent", eventController.createEventCard);
routers.get("/getEventCards", eventController.getCards);
routers.put("/updateEventCards/:id", eventController.updateEventCard);
routers.delete("/deleteCard/:id", eventController.deleteCard);
routers.get("/getCardByCategory", eventController.getCardByCategory);

export default routers;
