/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('quantities', (table) => {
    table.increments();
    table
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.float('ingredient_quantity').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('quantities');
};
