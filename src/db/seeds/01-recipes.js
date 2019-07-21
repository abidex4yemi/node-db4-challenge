/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(() => knex('recipes').insert([
      { name: 'Shrimp Fried Rice II' },
      { name: 'Grilled Mexican Steak' },
      { name: 'Fish Tacos' },
      { name: 'Zucchini Linguine' },
    ]));
};
