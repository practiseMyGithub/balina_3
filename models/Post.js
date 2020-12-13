const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newPost = new Schema({
  // profile: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'profile'
  // },
  title: {
    type: String,
    required: [true, 'Empty title is not allowed'],
    maxlength: '50'
  },
  // price: {
  //   type: Number,
  //   min: [0, 'Please give the price!']
  // },
  category: {
    type: String,
    required: [true, 'Please choose the category'],
    enum: ['Garden', 'Pool', 'Internet', 'Fitness', 'Legal', 'Bank', 'Others']
  },
  // images: [
  // 	{
  // 		url: String,
  // 		public_id: String
  // 	}
  // ],
  // images: [String],
  description: {
    type: String,
    trim: true,
    required: [true, 'Please describe your post']
  },
  status: {
    type: Boolean,
    required: true
  },
  complain: {
    type: Boolean
  },
  ratingsAverage: {
    type: Number,
    min: [0, 'The min. rating is 0'],
    max: [5, 'The max. rating is 5'],
    default: 0,
    set: (val) => Math.floor(val * 10) / 10
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  unlikes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  numReviews: {   // stats
    type: Number,
    default: 0
  },
  numRatings: {   // stats
    type: Number,
    default: 0
  },
  numVotes: {     // stats
    type: Number,
    default: 0
  },
  numAgree: {     // stats
    type: Number,
    default: 0
  },
  numDisagree: {  // stats
    type: Number,
    default: 0
  },
  finalVote: Date,
  optionVote: {
    type: Boolean,
    default: false
  },
  milliseconds: Number
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
  }
);

// END OF SCHEMA ------------------------------


// use millisecond to sort the get all post.
newPost.pre('save', function () {
  this.milliseconds = Date.now();
})

// Populate for UI page
// newPost.pre(/^find/, function (next) {
//   this.populate({
//     path: 'reviews',
//     select: '-__v'
//   })
//   this.populate({
//     path: 'profile',
//     model: 'profile',
//     select: '-__v'
//   })
//   this.populate({
//     path: 'votes',
//     model: 'vote',
//     select: '-__v'
//   })
//   next();
// })


// Virtual populate for reviews
// newPost.virtual('reviews', {
//   ref: 'review',
//   foreignField: 'post',
//   localField: '_id'
// })

// Virtual populate for votes(for vote check circle)
// newPost.virtual('votes', {
//   ref: 'vote',
//   foreignField: 'post',
//   localField: '_id'
// })

module.exports = mongoose.model('post', newPost);