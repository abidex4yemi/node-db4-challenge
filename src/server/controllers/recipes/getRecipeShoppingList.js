import {
  createSuccess, GENERIC_ERROR, OK, createError,
} from '../../util';
// eslint-disable-next-line import/named
import { Recipe } from '../../model';

/**
 * Get recipe shopping list by id
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getRecipeShoppingList = async (req, res, next) => {
  try {
    const recipeID = req.params.id;

    const shoppingList = await Recipe.getShoppingList(recipeID);

    return res.status(OK).json(
      createSuccess({
        data: shoppingList,
        message: 'Recipe shopping list',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not get recipe shopping list',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default getRecipeShoppingList;
