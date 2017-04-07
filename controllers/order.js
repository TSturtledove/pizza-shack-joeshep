"use strict"

const Order = require("../models/order");
const { knex } = require("../db/database");
const Size = () => knex("sizes");
const Topping = () => knex("toppings");
const getToppings = () =>
  Topping().select()
  .then( (rows) => rows)
  .catch( (error) => {
    throw error
  });

const getSizes = () =>
  Size().select()
  .then( (rows) => rows)
  .catch( (error) => {
    throw error
  });

module.exports.show = (req, res, err) =>
  Promise.all([getToppings(), getSizes()])
  .then(([toppings, sizes]) =>
    res.render("order", {page: "Order", sizes, toppings})
  ).catch(err)

module.exports.create = (req, res, err) => {
  Order.forge(req.body)
    .save()
    .then( (orderObj) => {
      req.flash("orderMag", "thanks for ordering")
      res.redirect("/");
    })
    .catch( (err) =>{
      Promise.all([
        Promise.resolve(err),
        getSizes(),
        getToppings()
      ])
    .then( ([errors, sizes, toppings]) =>
      res.render("order", {page: "Order", sizes, toppings, errors, body})
    )
  })
  .catch(err)
};
