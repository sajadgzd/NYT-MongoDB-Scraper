// Require moment 
var moment = require("moment"); 
// Require mongoose
var mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    unique: true, 
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  updated: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }], 
  saved: {
    type: Boolean, 
    default: false
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
