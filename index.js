var express = require("express");
var app = express();

var path = require("path");

app.use(express.static("public"));
// app.use("/", express.static(path.join(__dirname + "/public")));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

// app.get("/", function(req, res){
//   res.send("Hello world")
// })

// The process.env.PORT is for deployment to Heroku. Don't worry about it! You can have the usual:
/*
app.listen(3000, function(){
*/
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});
