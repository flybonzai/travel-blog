const BlogPost = require('../models/blogpost');
const {body, validationResult} = require('express-validator');

exports.getBlogPosts = function (req, res, next) {
  BlogPost.find()
    .sort([['createdDate', 'descending']])
    .exec(function (err, blogPosts) {
      if (err) {
        return next(err);
      }
      res.json({blogPosts})
    })
};
