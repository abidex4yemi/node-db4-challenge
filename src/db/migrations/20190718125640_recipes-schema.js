/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', table => table
    .increments()
    .string('name')
    .unique()
    .notNullable());
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
