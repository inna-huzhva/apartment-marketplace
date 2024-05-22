import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { getService } from "./apartmentsService.js";

const db = await open({
  filename: "apartments.db",
  driver: sqlite3.Database,
});
await db.migrate();

const app = express();
const port = 6000;
const apartmentsService = getService(db);

app.get("/apartments", (req, res, next) => {
  const priceSorting = req.query.price || "asc";
  const roomsFilter = req.query.rooms || "any";
  apartmentsService
    .getApartments(priceSorting, roomsFilter)
    .then((aps) => res.json(aps))
    .catch(next);
});

app.post("/apartments", express.json(), (req, res, next) => {
  apartmentsService
    .addApartment(req.body)
    .then((a) => res.json(a))
    .catch(next);
});

app.delete("/apartments/:id", (req, res, next) => {
  apartmentsService
    .deleteApartment(req.params.id)
    .then(() => res.json())
    .catch(next);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
