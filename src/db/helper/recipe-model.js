/**
 * Wrap all recipe model functions
 *
 * @param {object} { modelObjName, tableName, knex }
 * @returns {object}
 */
export default ({ modelName = '', tableName = '', knex = {} }) => {
  function getAll({ limit, sortBy, sortDir }) {
    const query = knex(tableName);

    if (limit) {
      query.limit(limit);
    }

    if (sortBy && sortBy) {
      query.orderBy(sortBy, sortDir);
    }

    return query;
  }

  function getShoppingList(recipeID) {
    return knex
      .select('recipes.name, ingredient_name, ingredient_quantity')
      .from('ingredients')
      .join('quantities', 'ingredients.id', 'quantities.ingredient_id')
      .join('recipes', 'recipes.id', 'quantities.recipe_id')
      .where('recipes.id', recipeID)
      .orderBy('ingredients_id');
  }

  function getInstructions(recipeID) {
    return knex
      .select('recipe_steps.step_number, recipe_steps.step_description')
      .from('recipe_steps')
      .join('recipes', 'recipes.id', 'recipe_steps.recipe_id')
      .where('recipes.id', recipeID)
      .orderBy('recipe_steps.step_number');
  }

  return {
    modelName,
    getShoppingList,
    getAll,
    getInstructions,
  };
};
