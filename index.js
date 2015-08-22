//initialize app
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var postsController = require("./app/controllers/posts")

// serve public assets
app.use(express.static("public"));

//load html file
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

// var postsController = require("./app/controllers/posts")

// Routes
app.use("/", postsController)






// The process.env.PORT is for deployment to Heroku. Don't worry about it! You can have the usual:
/*
app.listen(3000, function(){
*/
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});
