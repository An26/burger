var mysql = require('mysql');
var localConnection = "mysql://root:yourpassword@localhost:3306/burgers_db";
var dbConnection = process.env.JAWSDB_URL || localConnection;
var connection = mysql.createConnection(dbConnection);

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'teecup26',
	database: 'burger_db'
});

connection.connect(function (err){
	if (err){
		console.error('error conneting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
