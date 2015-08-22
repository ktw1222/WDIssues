//Sequilize Model will go here
module.exports = function(sequelize, Sequelize){
  return sequelize.define("post", {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    status: Sequelize.STRING
  });
}
