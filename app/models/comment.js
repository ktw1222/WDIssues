//Sequilize Comment Model
module.exports = function(sequelize, DataType){
  return sequelize.define("comment", {
    body: DataType.TEXT
  })
}
