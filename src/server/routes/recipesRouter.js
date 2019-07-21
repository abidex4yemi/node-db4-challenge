import express from 'express';
import { getRecipes } from '../controllers/recipes';
import validateRecipeParameter from '../middleware/validateRecipeParam';

const router = express.Router();

router.route('id', validateRecipeParameter);

router.route('/recipes').get(getRecipes);

export default router;
