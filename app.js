const express = require('express');
const AppError = require('./middlewares/appError');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();

app.use(express.json());


// mounting the routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/expenses', require('./routes/api/expenses'));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}



app.use((req, res, next) => {
  next(new AppError(`Can't find - ${req.originalUrl}`), 404);
})

app.use(globalErrorHandler);



module.exports = app;
