/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities')
    .truncate()
    .then(() => knex('quantities').insert([
      { recipe_id: 1, ingredient_id: 10, ingredient_quantity: 2.1 },
      { recipe_id: 1, ingredient_id: 8, ingredient_quantity: 2 },
      { recipe_id: 1, ingredient_id: 3, ingredient_quantity: 0.1 },
      { recipe_id: 1, ingredient_id: 7, ingredient_quantity: 3 },
      { recipe_id: 1, ingredient_id: 9, ingredient_quantity: 4.1 },
      { recipe_id: 1, ingredient_id: 2, ingredient_quantity: 1 },
      { recipe_id: 1, ingredient_id: 3, ingredient_quantity: 3 },
      { recipe_id: 1, ingredient_id: 5, ingredient_quantity: 2.1 },
      { recipe_id: 2, ingredient_id: 1, ingredient_quantity: 2.1 },
      { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 2 },
      { recipe_id: 2, ingredient_id: 6, ingredient_quantity: 0.1 },
      { recipe_id: 2, ingredient_id: 2, ingredient_quantity: 3 },
      { recipe_id: 2, ingredient_id: 6, ingredient_quantity: 4.1 },
      { recipe_id: 2, ingredient_id: 8, ingredient_quantity: 1 },
      { recipe_id: 2, ingredient_id: 3, ingredient_quantity: 3 },
      { recipe_id: 2, ingredient_id: 5, ingredient_quantity: 2.1 },
      { recipe_id: 3, ingredient_id: 10, ingredient_quantity: 2.1 },
      { recipe_id: 3, ingredient_id: 8, ingredient_quantity: 2 },
      { recipe_id: 3, ingredient_id: 6, ingredient_quantity: 0.1 },
      { recipe_id: 3, ingredient_id: 7, ingredient_quantity: 3 },
      { recipe_id: 3, ingredient_id: 9, ingredient_quantity: 4.1 },
      { recipe_id: 3, ingredient_id: 7, ingredient_quantity: 1 },
      { recipe_id: 3, ingredient_id: 5, ingredient_quantity: 3 },
      { recipe_id: 3, ingredient_id: 12, ingredient_quantity: 2.1 },
      { recipe_id: 4, ingredient_id: 4, ingredient_quantity: 2.1 },
      { recipe_id: 4, ingredient_id: 7, ingredient_quantity: 2 },
      { recipe_id: 4, ingredient_id: 6, ingredient_quantity: 0.1 },
      { recipe_id: 4, ingredient_id: 2, ingredient_quantity: 3 },
      { recipe_id: 4, ingredient_id: 6, ingredient_quantity: 4.1 },
      { recipe_id: 4, ingredient_id: 8, ingredient_quantity: 1 },
      { recipe_id: 4, ingredient_id: 13, ingredient_quantity: 3 },
      { recipe_id: 4, ingredient_id: 10, ingredient_quantity: 2.1 },
    ]));
};
