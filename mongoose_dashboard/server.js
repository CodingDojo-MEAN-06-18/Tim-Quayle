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
const dbURI = 'mongodb://127.0.0.1:27017/badgers';
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

var BadgerSchema = new mongoose.Schema({
 name: {type: String, required: true},
 age:{type: Number, required: true},
 ffood: {type: String, required: true},
},{timestamps: true })
mongoose.model('Badger', BadgerSchema); 
var Badger = mongoose.model('Badger') 
// Routes
//Route to create new instance
app.get('/badgers/new', function(req, res) {
  
   res.render('new');
  })
app.post('/badgers', function(req, res) {
  console.log("POST DATA", req.body);
  
  const badger = new Badger({name: req.body.name, age: req.body.age, ffood: req.body.ffood});
  
  badger.save(function(err) {
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
      Badger.find({}, function(err, badgers) {
      console.log(badgers)
      res.render('index',{badgers: badgers });
  })


      
    }
  })
})
//routes
app.get('/', function(req, res) {
      Badger.find({},function(err, badgers) {
      res.render('index',{badgers: badgers });
    })
  }) 
app.get('/badgers/:foo', function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.find({_id: bid},function(err, badgers) {
      console.log(badgers) 
      res.render('display',{badgers: badgers });
    })
  }) 
app.get('/badgers/edit/:foo', function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.find({_id: bid},function(err, badgers) {
      console.log(badgers) 
      res.render('edit',{badgers: badgers });
    })
  }) 
app.post('/badgers/:foo', function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.update({_id: bid},{$set : {"name": req.body.name, "age": req.body.age, "ffood": req.body.ffood} },function(err, badgers) {
      console.log("Error: ",err) 
      res.redirect('/');
    })
  }) 
app.get('/badgers/destroy/:foo', function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.remove({_id: bid},function(err, badgers) {
      //console.log(badgers) 
      res.redirect('/');
    })
  }) 
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})