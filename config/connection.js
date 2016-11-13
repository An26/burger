var mysql = require('mysql');
var localConnection = "mysql://n5jfbwtwvnakly53:t30mgzpbc7f9e8pf@enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hzuz4d5nvwxpvokd";
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
