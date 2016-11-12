var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd() +'/public')); //should make my style file availible for the server to use in tamdum with my HTML file

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);


var PORT = process.env.PORT || 8080;
app.listen(PORT);