var express = require("express");
var router = express.Router();


function error(response, message){
  response.status(500);
  response.json({error: message})
}

// get index route
router.get("/posts", function(req, res){
  //get all posts
    // send back as json
    res.send("hi")
})



module.exports = router
