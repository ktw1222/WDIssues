var express = require("express");
var router = express.Router();
var DB = require("../../config/connection");
var Comment = DB.models.Comment;

function error(response, message){
  response.status(500);
  response.json({error: message});
};

router.get("/comments", function(req, res){
  Comment.findAll({order: "id"}).then(function(comments){
    res.json(comments);
  });
});

router.post("/comments", function(req, res){
  console.log("request body:", req.body);
  Comment.create(req.body).then(function(comment){
    res.json(comment);
  })
})

module.exports = router
