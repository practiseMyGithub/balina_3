
const AppError = require('../middlewares/appError');

const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    // API error
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    })
  }
}

const sendErrorProd = (err, req, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    })
  } else {
    console.log(err);
    res.status(500).json({
      status: err.status,
      message: 'Something went wrong'
    });
  }
}

const handleCastError = err => {
  // const message = `Invalid ${err.path}: ${err.value}`
  const message = `Invalid ${err.path}: ${err.value}`
  return new AppError(message, 400);
}

const handleDuplicateField = err => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0];  // message or errmsg
  const message = `Duplicate field: ${value}. Please use another one!`;
  return new AppError(message, 400);
}

const handleValidationError = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data: ${errors.join('. ')}`;
  return new AppError(message, 400);
}


module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'unknown error';

  if (process.env.NODE_ENV !== 'production') {
    sendErrorDev(err, req, res);

  } else {
    let error = { ...err }
    error.message = err.message;

    if (err.name === 'CastError') error = handleCastError(error);    // error from mongoose/schema
    if (err.code === 11000) error = handleDuplicateField(err);       // error from mongodb/MongoError
    if (err.name === 'ValidationError') error = handleValidationError(error)  // error from mongoose/schema

    sendErrorProd(error, req, res);
  }

  next(err);
}

