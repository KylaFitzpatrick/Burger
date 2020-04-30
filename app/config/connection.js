var mysql = require("mysql");
var config = require('../../config.js');

if (process.env.PORT) {
  connection = mysql.createConnection(process.env.PORT)
}else{
  connection = mysql.createConnection(config.databaseOptions);
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
