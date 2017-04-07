"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("contacts", (table) => {
    table.increments();
    table.string("name").notNullable().unique();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("message").notNullable();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTable("contacts");
