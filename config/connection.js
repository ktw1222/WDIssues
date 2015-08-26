//Connect Sequelize with Postgres
var Sequelize = require("sequelize");

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  // sequelize = new Sequelize("postgres:///wdissues_db");
  //sequelize = new Sequelize('postgres://nolds:password@localhost:5432/wdissues_db')
   sequelize = new Sequelize("postgres:///wdissues_db");
  //  sequelize = new Sequelize('postgres://nolds:password@localhost:5432/wdissues_db')

}

var Post = sequelize.import("../app/models/post");
var Comment = sequelize.import("../app/models/comment");

Comment.belongsTo(Post, {onDelete: "CASCADE"});
Post.hasMany(Comment);

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    Post: Post,
    Comment: Comment
  }
}
