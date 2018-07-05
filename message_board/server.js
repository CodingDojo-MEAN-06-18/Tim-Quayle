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
//url to connect to mongodb - database called 'mboard'
const dbURI = 'mongodb://127.0.0.1:27017/mboard';
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
//Comment Schema
const CommentSchema = new mongoose.Schema({
 name: {type: String, required: [true, "You must enter a valid name"]},
 comment:{type: String, required: [true, "You must enter a comment"]},
},{timestamps: true })
//Message Schema
const MessageSchema = new mongoose.Schema({
 name: {type: String, required: [true, "You must enter a valid name"]},
 message:{type: String, required: [true, "You must enter a message"]},
 comments: [CommentSchema]
},{timestamps: true })



mongoose.model('Message', MessageSchema); 
const Message = mongoose.model('Message') 
mongoose.model('Comment', CommentSchema); 
const Comment = mongoose.model('Comment') 
// Routes
//Route to create new instance
app.post('/newmessage', function(req, res) {
  console.log("POST DATA", req.body);
  
  const msg = new Message({name: req.body.name, message: req.body.message});
  
  msg.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log(err)
      console.log('something went wrong');
         for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
                                   }
            //console.log("RF ",req.flash)
            res.redirect('/');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a message!');
      res.redirect('/');     
           }
  })
}) 
app.post('/newcomment/', function(req, res) {
  const mid = req.body.msgid;
  console.log("POST DATA", req.body);
  
  //create our comment
  Comment.create({name: req.body.name, comment: req.body.comment}, function(err, comment_instance){
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
      console.log('successfully added a comment!');
     
      Message.findOneAndUpdate({_id: mid}, {$push: {comments: comment_instance }}, function(err, data){
       if(err){
        console.log('error attaching comment to message')
       }
       else{
        console.log('successfully attached comment to message')
       }
     })
      
      res.redirect('/');     
           }
  })
}) 
app.get('/', function(req, res) {
      Message.find({},function(err, msgs) {
      console.log(msgs);
      res.render('index',{msgs: msgs});
    })
  })
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})