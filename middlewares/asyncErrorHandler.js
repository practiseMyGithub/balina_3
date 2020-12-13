module.exports = fn => {
  return (req, res, next) => {
    // fn(req, res, next).catch(next);
    fn(req, res, next).catch(err => next(err));
  }
}

/** NOT FOR CUSTOM ERROR HÄNDLER */
// module.exports = fn => (req, res, next) => {
//   fn(req, res, next).catch(err => {
//     if (err.kind === 'ObjectId') {
//       return res.status(500).json({ msg: 'No item found with that ID' });
//     } else {
//       console.log(err.message);
//       return next(err);
//     }
//   });
// }
