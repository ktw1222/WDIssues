//Connect Sequelize with Postgres
var Sequelize = require("sequelize");
// var sequelize = new Sequelize("postgres:///wdissues_db");
var sequelize = new Sequelize('postgres://nolds:password@localhost:5432/wdissues_db')
var Post = sequelize.import("../app/models/post");

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: { Post: Post}
}
