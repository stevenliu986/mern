import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
import template from "./../template";
import devBundle from "./devBundle";
const CURRENT_WORKING_DIR = process.cwd();

const app = express();
devBundle.compile(app);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.get("/", (req, res) => {
  res.status(200).send(template());
});

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
MongoClient.connect(url, (err, db) => {
  console.log("Connected successfully to mongodb server");
  db.close();
});

let port = process.env.PORT || 3000;

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on port ${port}.`);
});
