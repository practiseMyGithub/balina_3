const express = require('express');

const app = express();


// mounting the routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/expenses', require('./routes/api/expenses'));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}




module.exports = app;
