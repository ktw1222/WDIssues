var DB = require("../config/connection")
var Post = DB.models.Post
var Comment = DB.models.Comment

var posts = [
  {title:"Post num1", body: "generic body1", status: "open"},
  {title:"Post num2", body: "generic body2", status: "open"},
  {title:"Post num3", body: "generic body3", status: "open"},
  {title:"Post num4", body: "generic body4", status: "open"}
]

var comments = [
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 2},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 3},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 4},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId:4}
]

Post.bulkCreate(posts).then(function(){
  return Comment.bulkCreate(comments)
}).then(function(){
  console.log("Seeded successfully! kthxbye");
  process.exit();
});
