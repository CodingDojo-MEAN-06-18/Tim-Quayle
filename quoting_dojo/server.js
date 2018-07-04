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



var QuoteSchema = new mongoose.Schema({
 name: {type: String, required: true},
 quote:{type: String, required: true}
},{timestamps: true })
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
// Routes
// Root Request
app.get('/', function(req, res) {
  
   res.render('index');
  })

app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  const quote = new Quote({name: req.body.name, quote: req.body.quote});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  quote.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log(err)
      console.log('something went wrong');
         for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
                                   }
            // redirect the user to an appropriate route
            res.redirect('/');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
      Quote.find({}, function(err, quotes) {
      console.log(quotes)
      res.render('quotes',{quotes: quotes });
  })


      
    }
  })
})
app.get('/quotes', function(req, res) {
      //sort -1 = descending
       //quotes = Quote.find({}).sort({"createdAt": -1})
     Quote.find({},function(err, quotes) {
      res.render('quotes',{quotes: quotes });
    })
  })

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})