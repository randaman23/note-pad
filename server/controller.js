const bcrypt = require("bcryptjs");

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
    const { id } = req.params;
    const {note_content} = req.body
    let edit = await db.edit_post([req.session.user.user_id, id, note_content]);
    res.status(200).send(edit)
  }
};
