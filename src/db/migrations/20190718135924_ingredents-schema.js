/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments();
    table
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes');

    table.string('ingredient_name').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
