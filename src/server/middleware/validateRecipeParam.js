// eslint-disable-next-line import/named
import { Recipe } from '../model';
import { NOT_FOUND, createError } from '../util';

/**
 * Validate recipe request parameter id
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} recipeID
 */
const validateRecipeParam = async (req, res, next, recipeID) => {
  try {
    const recipe = await Recipe.getById(recipeID);

    if (!recipe) {
      return next(
        createError({
          message: 'Recipe ID is invalid.',
          status: NOT_FOUND,
        }),
      );
    }

    req.recipe = recipe;

    return next();
  } catch (error) {
    return next(error);
  }
};

export default validateRecipeParam;
