var express = require('express')
var app = express()
// use a page for navigation
app.use(express.static(__dirname + '/public'))
// same as app.use("/public", express.static(__dirname))

var mongoose = require('mongoose')
// made a database using mongo in terminal then in the shell
// I did use database
mongoose.connect('mongodb://localhost/database')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectID
var Factory = require('./module.factory.js')
var db = mongoose.connection

db.on('error', function(){
	console.log("Connection Error with Mongodb")
})

db.once('open', function(){
	console.log('Mongodb is up and running')
})

var factory = new Factory(Schema,mongoose)
// everytime we run the app we are adding people
factory.createSchemas()
factory.insertPeople()


app.get('/ping', function(req, res){
	res.send({ping: 'hello this is the server, and I am working'})
})

app.get('/ping/:id', function(req, res){
	res.send({ping: 'hello this is the server, and I have ' + req.params['id']})
})

app.get('/person/hektor', function(req, res){
	var resp = factory.getPerson({name: 'hektor'}, res) 
})


app.get('/person/nabeel', function(req, res){
	var resp = factory.getPerson({name: 'Nabeel'}, res)
})


app.get('/', function(req, res){
	res.render('index', {title: 'Home'})
	// lets you use the index html page
})

app.listen(1111);
console.log("listening on port 1111....")


