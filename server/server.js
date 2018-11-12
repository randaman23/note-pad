require("dotenv").config();
const express = require("express"),
  massive = require("massive");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log('db is connected')
});

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Hoi from port ${SERVER_PORT}`);
});
