//Connect Sequelize with Postgres
var Sequelize = require("sequelize");
// var sequelize = new Sequelize("postgres:///wdissues_db");
var sequelize = new Sequelize('postgres://nolds:password@localhost:5432/wdissues_db')
var Post = sequelize.import("../app/models/post");
var Comment = sequelize.import("../app/models/comment");

Comment.belongsTo(Post);
Post.hasMany(Comment);

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    Post: Post,
    Comment: Comment
  }
}
