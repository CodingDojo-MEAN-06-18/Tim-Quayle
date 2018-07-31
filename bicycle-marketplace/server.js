// Require the Express Module
var express = require('express');
// Create an Express App
var session = require('express-session');
var app = express();
mongoose = require('mongoose'),
MongoStore = require('connect-mongo')(session),
app.use(session({
  secret: 'lakdj32akd',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000000 },
  rolling: true,
  'store': new MongoStore({
    mongoose_connection: 'bike-store',
    adapter: 'connect-mongo',
    url: 'mongodb://localhost:27017/bike-market',
    collection: 'sessions'
})
                 })) 
                
const path = require('path');
 app.use(express.static(path.join(__dirname, './bicycle-marketplace/dist/bicycle-marketplace')));
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)