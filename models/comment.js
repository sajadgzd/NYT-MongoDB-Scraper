// Require moment 
var moment = require("moment"); 
// Require mongoose
var mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var CommentSchema = new Schema({
  // title is a required string
  author: {
    type: String,
    required: true
  },
  // link is a required string
  content: {
    type: String,
    required: true
  },
  createdOn: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  }
});

// Create the Article model with the ArticleSchema
var Comment = mongoose.model("Comment", CommentSchema);

// Export the model
module.exports = Comment;