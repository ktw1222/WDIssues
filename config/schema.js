var DB = require("./connection");

DB.do.sync({force: true}).then(function(){
  console.log("Its working");
  process.exit();
});
