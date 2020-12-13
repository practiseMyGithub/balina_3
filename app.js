const express = require('express');

const app = express();


app.use('/', (req, res) => res.send('API running'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}




module.exports = app;
