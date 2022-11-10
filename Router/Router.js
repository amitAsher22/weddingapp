import express from "express";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";
import menuController from "../controllers/menuController.js";
import eventController from "../controllers/eventCardController.js";

const routers = express.Router();

routers.post("/register", registerUser);
routers.post("/login", loginUsers);
routers.post("/createEvent", eventController.createEventCard);
routers.get("/getEventCards", eventController.getCards);
routers.put("/updateEventCards/:id", eventController.updateEventCard);
routers.delete("/deleteCard/:id", eventController.deleteCard);
routers.get("/getCardByCategory", eventController.getCardByCategory);
routers.get("/getCardByLikes", eventController.getCardsByLikes);
routers.post("/menu", menuController.createMenu);

export default routers;
