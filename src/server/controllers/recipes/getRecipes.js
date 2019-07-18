// eslint-disable-next-line import/named
import { Recipes } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Get all recipes
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
export default async function getRecipes(req, res, next) {
  try {
    const { limit } = req.query;
    const { sortBy } = req.query;
    const { sortDir } = req.query;

    const recipe = await Recipes.getAll({ limit, sortBy, sortDir });

    return res.status(OK).json(
      createSuccess({
        data: recipe,
      }),
    );
  } catch (error) {
    return next(error);
  }
}
