// Require the Express Module
 express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
const path = require('path');
 app.use(express.static(path.join(__dirname, './github-battle/dist/github-battle')));
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)