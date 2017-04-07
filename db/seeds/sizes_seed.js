"use strict";

const { knex } = require("../database");
const sizes = require("./sizes");

const sizePromises = sizes.map( ({name, inches}) => {
  return knex("sizes").insert({name, inches});
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then( ()=> {
      // Inserts seed entries
      return Promise.all(sizePromises);
    });
};
