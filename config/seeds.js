var DB = require("../config/connection")
var Post = DB.models.Post
var Comment = DB.models.Comment
var User = DB.models.User

var user = {id: 1, username: "John Master", githubId: "7882341", createdAt: "2015-08-27T22:32:35.983Z", updatedAt: "2015-08-27T22:32:35.983Z"}

var posts = [
  {title:"Post num1", body: "generic body1", status: "open", userId: 1},
  {title:"Post num2", body: "generic body2", status: "open", userId: 1},
  {title:"Post num3", body: "generic body3", status: "open", userId: 1},
  {title:"Post num4", body: "generic body4", status: "open", userId: 1}
]

var comments = [
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 1, userId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 1, userId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 2, userId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 3, userId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 3, userId: 1},
  {body:"Are you sure you didn't capitalize something you shouldn't have?", postId: 3, userId: 1}
]

User.create(user).then(function(){
  return Post.bulkCreate(posts)
}).then(function(){
  return Comment.bulkCreate(comments)
}).then(function(){
  console.log("Seeded successfully! kthxbye");
  process.exit();
});
