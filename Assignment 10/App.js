// app.js

const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    (username, password, done) => {
      if (username === "admin" && password === "password") {
        return done(null, { username: "admin" });
      } else {
        return done(null, false, { message: "Incorrect username or password" });
      }
    }
  )
);

app.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: info.message });
    }

    const token = jwt.sign(user, "secret-key");

    return res.json({ token });
  })(req, res, next);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
