// setup the code to connect Node to MySQL.

var mysql = require('mysql');

//var localConnection = "mysql://root:yourpassword@localhost:3306/burgers_db";
//mysql.createConnection(process.env.JAWSDB_URL);

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