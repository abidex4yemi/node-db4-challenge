import {
  BAD_REQUEST, CONFLICT, NOT_FOUND, GENERIC_ERROR,
} from '../util';

/**
 * Handle bad request error
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @param {object} err
 */
const badRequest = (err, req, res, next) => {
  if (err.status !== BAD_REQUEST) {
    return next(err);
  }

  // Handle invalid JSON body
  if (err.type && err.type.includes('entity.parse.failed')) {
    return res.status(BAD_REQUEST).json({
      ok: false,
      errors: [
        {
          message: 'Invalid JSON object check request body',
          body: err.body,
        },
      ],
    });
  }

  return res.status(BAD_REQUEST).json({
    ok: false,
    errors: [err],
  });
};

/**
 * Handle resource not found error
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notFound = (err, req, res, next) => {
  if (err.status !== NOT_FOUND) {
    return next(err);
  }

  return res.status(NOT_FOUND).json({
    ok: false,
    message: err.message || 'Resource not found',
    errors: [err],
  });
};

/**
 * Handle resource resource already exist error
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const resourceConflict = (err, req, res, next) => {
  if (err.status !== CONFLICT) {
    return next(err);
  }

  return res.status(CONFLICT).json({
    ok: false,
    errors: {
      message: err.message,
      status: err.status,
    },
  });
};

/**
 * Handle server error
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
// eslint-disable-next-line no-unused-vars
const genericError = (err, req, res, next) => res.status(GENERIC_ERROR).json({
  ok: false,
  message: err.message || 'Internal server error',
  errors: [err],
});

export default {
  badRequest,
  notFound,
  resourceConflict,
  genericError,
};
