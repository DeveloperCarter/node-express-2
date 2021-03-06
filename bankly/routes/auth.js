/** Auth-related routes. */

const User = require("../models/user");
const express = require("express");
const router = express.Router();
const createTokenForUser = require("../helpers/createToken");
const ExpressError = require("../helpers/expressError");

/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post("/register", async function (req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } =
      req.body;
    let user = await User.register({
      username,
      password,
      first_name,
      last_name,
      email,
      phone,
    });
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ _token: token });
    // bug 1
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    let user = User.authenticate(username, password);
    if (!user) {
      throw new ExpressError("Cannot authenticate user", 403);
    } else {
      const token = createTokenForUser(username, user.admin);
      return res.json({ _token: token });
    }
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
