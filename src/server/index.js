/**
 * Application Main file
 */
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from './middleware/errorHandler';
import recipesRouter from './routes/recipesRouter';
import { OK, createSuccess } from './util';

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => res.status(OK).json(
  createSuccess({
    message: 'Welcome to home route...',
    data: [],
  }),
));

app.use('/api/v1', [recipesRouter]);

// Handle invalid request
app.all('*', (req, res) => res.status(404).json({
  success: false,
  message: 'Route does not exist...',
  body: [],
}));

// handle all application error
// eslint-disable-next-line max-len
app.use([errorHandler.badRequest, errorHandler.notFound, errorHandler.resourceConflict, errorHandler.genericError]);

export default app;
