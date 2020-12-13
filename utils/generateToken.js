const jwt = require('jsonwebtoken');
const asyncErrHandler = require('../middlewares/asyncErrorHandler');

// localstorage
// exports.generateToken = (id) => {
//   const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d'
//   });
//   return token;
// }


// Cookie
exports.generateToken = async (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })

  const cookieOption = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true
  }

  if (process.env.NODE_ENV === 'production') cookieOption.secure = true;
  res.cookie('jwt', token, cookieOption);


  res.status(200).json({ token })
}


