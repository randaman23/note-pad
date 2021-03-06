const bcrypt = require("bcryptjs");
const axios = require("axios");
const { MARS } = process.env;

module.exports = {
  async createUser(req, res) {
    const db = req.app.get("db");
    const { email, password } = req.body;
    let foundUser = await db.check_email([email]);
    if (foundUser[0]) return res.status(409).send("Email already exists");
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    let user = await db.create_user([email, hash]);
    req.session.user = user[0];
    res.status(200).send(req.session.user);
  },

  async login(req, res) {
    const db = req.app.get("db");
    const { email, password } = req.body;
    let foundUser = await db.check_email([email]);
    if (!foundUser[0]) return res.status(400).send("Email does not exist");
    let result = bcrypt.compareSync(password, foundUser[0].user_password);
    if (result) {
      req.session.user = foundUser[0];
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("Email or Password Incorrect");
    }
  },

  async userData(req, res) {
    const db = req.app.get("db");
    let userNotes = await db.get_user(req.session.user.user_id);
    console.log(req.session.user.user_id);
    res.status(200).send(userNotes);
  },

  async newNote(req, res) {
    const db = req.app.get("db");
    let newNote = await db.new_note(req.session.user.user_id);
    res.status(200).send(newNote);
  },

  async deleteNote(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    let deleted = await db.delete_note([req.session.user.user_id, id]);
    res.status(200).send(deleted);
  },

  async logout(req, res) {
    req.session.destroy();
    res.status(200).send("User Logged Out");
  },

  async editPost(req, res) {
    const db = req.app.get("db");
    // const { id } = req.params;
    const { text, id } = req.body;
    console.log(text, id);
    let edit = await db.edit_post([text, id, req.session.user.user_id]);
    res.status(200).send(edit);
  },
  async mars(req, res) {
    let mars = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${MARS}`
    );
    res.status(200).send(mars.data);
  },
  async getQuote(req, res) {
    let quote = await axios.get("https://api.adviceslip.com/advice");
    res.status(200).send(quote.data);
  },
  // async getSpace(req, res) {
  //   let space = await axios.get(
  //     `GET https://api.nasa.gov/planetary/apod?api_key=${MARS}`
  //   );
  //   res.status(200).send(space);
  // }
};
