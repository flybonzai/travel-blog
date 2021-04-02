const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
  createdDate: {type: Date, required: true},
  author: {type: String, required: true},
  postText: {type: String, required: true}
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
