module.exports = (app) => {

  const User = require('../models/user.js');
const express = require("express");
// const router = express.Router();

const UserController = require('../controller/user');
const checkAuth = require('../middleware/check-auth');

app.post("/signup", UserController.user_signup);

app.post("/login", UserController.user_login);

app.delete("/:userId", checkAuth, UserController.user_delete);

app.get('/signup', UserController.user_signup_page);
}
// module.exports = router;
