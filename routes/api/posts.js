const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Get posts');
})


module.exports = router;