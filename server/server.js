require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  controller = require("./controller");

const { SERVER_PORT, CONNECTION_STRING, SECRET, MARS } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});
app.use(express.static(`${__dirname}/../build`));

app.use(express.json());

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.post(`/api/createuser`, controller.createUser);
app.post(`/auth/login`, controller.login);
app.get("/api/user-data", controller.userData);
app.post("/api/addnote", controller.newNote);
app.delete("/api/delete/:id", controller.deleteNote);
app.get("/auth/logout", controller.logout);
app.put(`/api/edit`, controller.editPost);

app.get(`/api/mars`, controller.mars);

app.listen(SERVER_PORT, () => {
  console.log(`Hoi from port ${SERVER_PORT}`);
});
