const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/authHandler');
const asyncErrHandler = require('../../middlewares/asyncErrorHandler');
const Post = require('../../models/Post');
// const Profile = require('../../models/Profile');
// const Review = require('../../models/Review')
// const Vote = require('../../models/Vote')
// const APIFeatures = require('../../utils/apiFeatures');
const AppError = require('../../middlewares/appError');

router.get('/', (req, res, next) => {
  res.send('Get posts');
})


// @route     POST api/posts
// desc       Create post 
// @access    Private
router.post('/', asyncErrHandler(async (req, res, next) => {
  // Check the profile 
  // const profile = await Profile.findOne({ user: req.user.id });

  const newPost = {
    // profile,
    title: req.body.title,
    // price: req.body.price,
    category: req.body.category,
    status: req.body.status,
    complain: req.body.complain,
    optionVote: req.body.optionVote,
    finalVote: req.body.finalVote,
    description: req.body.description
  }


  if (newPost.status) {
    if (!newPost.finalVote || new Date(newPost.finalVote).getTime() <= Date.now())
      return next(new AppError('Final date must be greater than current date !', 404));
  }

  const post = await Post.create(newPost);
  if (!post) return next(new AppError('Post creation failed !', 404));
  res.status(201).json(post);
}));


module.exports = router;