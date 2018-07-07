// Require the Express Module
var express = require('express');
// Create an Express App
var session = require('express-session');
var uniqueValidator = require('mongoose-unique-validator');
var app = express();
// Require body-parser (to receive post data from clients)
app.use(session({
    secret: 'lakdj32akd',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))
var bcrypt = require('bcrypt-as-promised');
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({
    extended: true
}));
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
const dbURI = 'mongodb://127.0.0.1:27017/userdb';
mongoose.connect(dbURI);
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

var UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please enter a firstname"],
        minlength: [2, "Firstname must be at least 2 characters"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter a lastname"],
        minlength: [2, "Lastname must be at least 2 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email address"],
        match: [/\S+@\S+\.\S+/, "Please enter a valid Email"],
        unique: [true, "Email is already Registered with an account"]
    },
    dob: {
        type: Date,
        required: [true, "Please enter a Date of Birth"]
    },
    password: {
        type: String,
        required: [true, "Please enter a Password"],
        minlength: [8, "Password must be at least 8 characters"]
    },
}, {
    timestamps: true
})
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
// Routes
//Route to create new instance

app.post('/logincheck', function(req, res) {
    console.log(req.body.email)
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) {
            console.log(err)
            req.flash('registration', 'Invalid Username or Password!');
            res.redirect('/')
        } else {
            //if no user was returned, its not in our db, load a flash error and make em relogin
            if (!user) {
                console.log("WE ARE HERE!")
                req.flash('registration', 'Invalid Username or Password!');
                res.redirect('/')
            }
            //a user was returned
            else {
                console.log("Found User")
                console.log("UP ", user)
                console.log(req.body.password)
                //check given password vs password stored in our db
                bcrypt.compare(req.body.password, user.password)
                    .then(result => {
                        console.log("Successful Password Match")
                        //store our session variable identifier
                        req.session.email = req.body.email;
                        res.render('userdash', {
                            user: user
                        })
                    })
                    .catch(error => {
                        //password does not match, load a flash error and meke em relogin
                        console.log(error)
                        console.log("Password Mismatch");
                        req.flash('registration', 'Invalid Username or Password!');
                        res.redirect('/')
                    })



            }

        }
    })
})

app.post('/user_reg', function(req, res) {
  
   
   var cutoffdate = new Date(2006, 01, 01);
   var postdate = new Date(req.body.dob);
    if(req.body.password != req.body.cpassword) {
      req.flash('registration', 'Passwords dont match!');
        console.log("Password mismatch")
        res.render('index' )
                                                 }
    //make sure password is at least 8 characters
    else if (req.body.password.length < 8){
        console.log("Length violation")
        req.flash('registration', 'Password must be at least 8 characters');
        res.render('index' )
                                     } 
    // is user over 12 years old?
    else if (postdate > cutoffdate){
        console.log("Too Young")
        req.flash('registration', 'You must be at least 13 years old to register!');
        res.render('index' )
                                     } 
    else {
    console.log("POST DATA", req.body);
    console.log(req.body.password);
    bcrypt.hash(req.body.password, 10)
        .then(hashed_password => {
            console.log(hashed_password);
            const user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                dob: req.body.dob,
                password: hashed_password
            });

            user.save(function(err) {
                // if there is an error console.log that something went wrong!
                if (err) {
                    console.log(err)
                    console.log('something went wrong');
                    for (var key in err.errors) {
                        req.flash('registration', err.errors[key].message);
                    }
                    // redirect the user to an appropriate route
                    res.redirect('/');
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a user!');
                    //passed all validation, set session variable and log us into our dashboard.
                    req.session.email = req.body.email;
                    User.findOne({
                        email: req.session.email
                    }, function(err, user) {
                        //account for err if it happens!
                        res.render('userdash', {
                            user: user
                        })
                    })



                }
            })
        })
        .catch(error => {
            console.log(error)
            console.log("Error Encypting Password")

        });
    }
})
//routes
app.get('/', function(req, res) {
    if (req.session.email) {
        console.log("session variable found!")
        User.findOne({
            email: req.session.email
        }, function(err, user) {
            //account for err if it happens!

            res.render('userdash', {
                user: user
            })
        })
    } else {
        console.log("ROOT ROUTE!")
        res.render('index');
    }
})
//logout route, deletes our session variable, redirects to root
app.get('/logout', function(req, res) {
    delete req.session.email;
    res.redirect('/')
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})