import express from "express";
import { getItemsBySearch, getItemById } from "./../controllers/items";

const router = express.Router();

router.get("/api/items", getItemsBySearch);

router.get("/api/items/:id", getItemById);

export { router as itemsRoutes };
