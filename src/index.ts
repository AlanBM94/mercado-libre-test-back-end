import express from "express";
import dotenv from "dotenv";
import { itemsRoutes } from "./routes/items";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(itemsRoutes);

app.listen(PORT, () => {
  console.log(`hello from port ${PORT}!!!`);
});
