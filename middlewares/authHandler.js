const jwt = require('jsonwebtoken');
const util = require('util');
const asyncErrHandler = require('./asyncErrorHandler')
// const User = require('../models/User');
// const Profile = require('../models/Profile');
const Post = require('../models/Post');
// const Info = require('../models/Info');
// const Review = require('../models/Review');
const AppError = require('./appError');

// Protect private pages
exports.auth = asyncErrHandler(async (req, res, next) => {

  // let token;
  // if (req.header('x-auth-token')) {
  //   token = req.header('x-auth-token');
  // } else if (req.cookies.jwt) {
  //   token = req.cookies.jwt;
  // }


  // // with localstorage
  // // const token = req.header('x-auth-token');

  // if (!token) {
  //   return next(new AppError('Please login first !', 401));
  // }

  // // Verify jsonwebtoken
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);


  // // Check if user exist
  // const user = await User.findById(decoded.id);
  // if (!user) return next(new AppError('User doesn\'t exist !', 401))

  // Check if password has ben changed
  // if (!await user.hasChangedPassword(decoded.iat)) throw new Error('Password has been changed!');

  const user = {
    '_id': '5fc6bdfeaa3f197380dc2c95',
    'email': 'admin@email.com',
    // 'password': '$2a$10$ag96mvQ4wGDt/tOS0yTqbukL57BXWp02PfmCmVD3NknsHaiZf8PdS',
    'createdAt': '2020-12-01T22:04:46.659Z',
    'updatedAt': '2020-12-01T22:06:10.475Z',
    '__v': 0,
    'profile': '5fc6be524724e47d6072fba7'
  }


  req.user = user;

  next();
})

// // Check Profile exist
// exports.isProfileExist = asyncErrHandler(async (req, res, next) => {
//   const profile = await Profile.findOne({ user: req.user.id });
//   // if (!profile) throw new Error('You have no profile. Please make a new one !')
//   if (!profile) return next(new AppError('You have no profile. Please make a new one !', 401));
//   next();
// })

// // Check is post author 
// exports.isPostAuthor = asyncErrHandler(async (req, res, next) => {
//   const post = await Post.findById(req.params.id);
//   if (!post) return next(new AppError('No post found!', 404)) // id valid but no post with that id

//   // Check if post belongs to current user
//   if (req.user.role !== 'super-admin' && !post.profile.equals(req.user.profile.id)) return next(new AppError('You are not authorized!', 401));
//   // req.post = post;
//   next();
// })

// // Check is post author 
// exports.isCommentAuthor = asyncErrHandler(async (req, res, next) => {
//   const review = await Review.findOne({ post: req.params.id });
//   if (!review) return next(new AppError('No review found!', 404)) // id valid but no post with that id

//   // Check if post belongs to current user
//   if (req.user.role !== 'super-admin' && !review.profile.equals(req.user.profile.id)) return next(new AppError('You are not authorized!', 401));

//   next();
// })

// // Check is info author 
// exports.isInfoAuthor = asyncErrHandler(async (req, res, next) => {
//   const info = await Info.findOne({ profile: req.user.profile.id });
//   if (!info) return next(new AppError('No info found!', 404))

//   // Check if post belongs to current user
//   if (req.user.role !== 'super-admin' && !info.profile.equals(req.user.profile.id)) return next(new AppError('You are not authorized!', 401));

//   next();
// })

// // Check if have comment already for a post
// exports.haveReviewed = asyncErrHandler(async (req, res, next) => {
//   const review = await Review.find({ profile: req.user.profile.id });
//   if (review.length) return next(new AppError("For this post you have already sent your review !", 401));
//   next();
// })