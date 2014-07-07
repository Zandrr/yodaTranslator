//config


//requires
var express = require('express'), 
    http    = require('http'),
    path    = require('path'),
    routes  = require('./routes')
    sass    = require("node-sass");

var app = express(); //create new express app
app.set('port', process.env.PORT || 3001); //set 'port' to env variable PORT and pipe in 3000
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/images'));
app.use(express.bodyParser()); //middleware parser
app.use(express.methodOverride()); //allows for PUT/DELETE ect
app.use(app.router);

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("listening on port "+ app.get('port'));

});