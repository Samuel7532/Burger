var mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wake84148",
    database: "burgersdb"
  },
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;