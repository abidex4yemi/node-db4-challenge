// eslint-disable-next-line import/named
import { Recipe } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Get all recipes
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getRecipes = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const { sortBy } = req.query;
    const { sortDir } = req.query;

    const recipe = await Recipe.getAll({ limit, sortBy, sortDir });

    return res.status(OK).json(
      createSuccess({
        data: recipe,
      }),
    );
  } catch (error) {
    return next(error);
  }
};

export default getRecipes;
