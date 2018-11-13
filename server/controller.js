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
  }
};
