import express from "express";
import { getApartments, addApartment } from "./apartmentsService.js";

const app = express();
const port = 6000;

app.get("/apartments", (req, res) => {
  const priceSorting = req.query.price || "asc";
  const roomsFilter = req.query.rooms || "any";
  res.json(getApartments(priceSorting, roomsFilter));
});

app.post("/apartments", express.json(), (req, res) => {
  res.json(addApartment(req.body));
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
