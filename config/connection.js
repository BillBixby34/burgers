// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
	port:3011,
	host: "localhost",
	user: "root",
	password: "1001",
	database: burgers_db;
});

//Inside the `connection.js` file, setup the code to connect Node to MySQL.
connection.connect(function(err){
	if (err){
		console.error("error connecting: " + err.stack);//check
		return;
	}
	console.log("connected as id " + connection.threadId);
});
//export the connection;
module.exports = connection;
