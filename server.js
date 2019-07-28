var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// // Launch App
// var port = process.env.PORT || 3000;

// Initialize Express for debugging & body parsing
var app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Use morgan logger for logging requests
app.use(logger("dev"));

// Make public a static folder
app.use(express.static("public"));

// Express-Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/web-scraper", {
  useNewUrlParser: true
});

// put require at the end because it has to go through bodyParser first
// bodyParser is what provides you with req.body
require("./controllers/controller")(app);

app.listen(PORT, function() {
  console.log("Running on PORT: " + PORT);
});
