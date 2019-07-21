import create from '../../db/helper/recipe-model';

module.exports = (knex) => {
  const models = create({ modelName: 'Recipe', tableName: 'recipes', knex });

  return {
    ...models,
  };
};
