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
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)
