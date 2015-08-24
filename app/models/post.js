//Sequilize Model will go here
module.exports = function(sequelize, DataType){
  return sequelize.define("post", {
    title: DataType.STRING,
    body: DataType.TEXT,
    status: DataType.STRING
  });
}
