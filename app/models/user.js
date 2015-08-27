module.exports = function(sequelize, DataType){
  return sequelize.define("user", {
    username: DataType.STRING,
    githubId: DataType.STRING
  })
}
