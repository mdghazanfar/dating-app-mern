import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";
import dotenv from "dotenv";
dotenv.config();
//App Config

const app = express();
const port = process.env.PORT || 8001;

// MiddleWare
app.use(express.json());
app.use(Cors());

// DB Config

mongoose.connect(process.env.connection_url, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info("connected to DB");
  }
});
// API ENDpoints

app.get("/", (req, res) => res.status(200).send("hello Mrs Ghazanfar"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
