"use strict";

const User = require("../models/user")

module.exports.show = (req, res) => {
  res.render("register", {page: "Register"});
}

module.exports.create = ({body: {email, password, confirmation}}, res) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then( (user) => {
      if (user) return res.render("register", {msg: "email already used"});
      return User.forge({email, password})
      .save()
      .then( ()=> {
        res.redirect("/")
      })
      //catch for save
      .catch( (err)=> res.render("register", {msg: "dang, problem"}));
    })
    //catch for findOneByEmail
    .catch( (err) => res.render("register", {msg: "well... problem"}));
  } else {
    res.render("register", {mag: "password and confirmation don't match, try again"});
  }
}
