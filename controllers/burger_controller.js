var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	burger.selectAll(function(data){
		var burgerData = {burger: data};
		res.render('index', burgerData);
	});
});

router.post('/insertOne', function (req, res) {
	burger.insertOne('burger_name', req.body.burger_name, function(data) {
		res.redirect('/');
	});
});

router.put('/updateOne/:id', function(req, res){
	var condition = 'id = ' + req.params.id;
	col = 'devoured = 1';
	burger.updateOne( col,
		condition, function(data){
			var ate = {burger: data};
			res.redirect('/');
		});
});

module.exports = router;