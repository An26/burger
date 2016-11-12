var connection = require('../config/connection.js');

var orm = {
	selectAll: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (table, col, val, cb) {
		var queryString = 'INSERT INTO ' + table + '('+ col +') VALUES ("'+ val +'");';
		console.log(queryString);
		
		connection.query(queryString, function (err, result) {
			if (err) {throw err}
				else {cb(result)};
		});
	},

	updateOne: function (table, col, condition, cb) {
		var queryString = 'UPDATE ' + table + ' SET ' + col + ' WHERE ' + condition;
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}

};

module.exports = orm;