import express from "express";
import suppliersController from "../controllers/SuppliersController.js";

const routers = express.Router();

routers.get("/suppliers", suppliersController.getsuppliersByName);

export default routers;
