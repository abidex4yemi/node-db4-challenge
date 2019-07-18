import express from 'express';
import { getRecipes } from '../controllers/recipes';

const router = express.Router();

router.route('/recipes').get(getRecipes);

export default router;
