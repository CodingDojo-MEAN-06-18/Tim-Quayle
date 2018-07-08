// Require the Express Module
var express = require('express');
// Create an Express App
var session = require('express-session');
var app = express();
// Require body-parser (to receive post data from clients)
app.use(session({
  secret: 'lakdj32akd',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
const flash = require('express-flash');
app.use(flash());
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
const dbURI = 'mongodb://127.0.0.1:27017/quotes';
mongoose.connect(dbURI);
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
//require('./server/models/quote.js')
//var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
// Routes
// Root Request
require('./server/config/routes.js')(app)
