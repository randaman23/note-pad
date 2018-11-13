require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  bcrypt = require("bcryptjs"),
  controller = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});

app.use(express.json());

app.post(`/api/createuser`, controller.createUser);

app.listen(SERVER_PORT, () => {
  console.log(`Hoi from port ${SERVER_PORT}`);
});
