var express = require("express");
var router = express.Router();
var DB = require("../../config/connection");
var Post = DB.models.Post;


function error(response, message){
  response.status(500);
  response.json({error: message})
}

// get all Posts route
router.get("/posts", function(req, res){
  //get all posts
  Post.findAll().then(function(posts){
    res.json(posts);
  })
})

// post to index posts route
router.post("/posts", function(req, res){
  console.log(req.body);
  Post.create(req.body).then(function(post){
    res.json(post);
  });
});



module.exports = router
