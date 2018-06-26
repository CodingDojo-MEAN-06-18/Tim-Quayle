var express = require("express");
console.log("Let's find out what express is", express);
var session = require('express-session');
var app = express();
app.use(session({
  secret: 'secretSess10nkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/", function (request, response){
    //check to see if session variable exists
    if(!request.session.count){
    request.session.count = 0;
                             }

    request.session.count++;
    var  context = {
        count: request.session.count
    }
    console.log(request.session.count)
    response.render('index.ejs', {count: context});

})
app.get("/plustwo", function (request, response){
    //check to see if session variable exists
    if(!request.session.count){
    request.session.count = 0;
                             }

    request.session.count=request.session.count+2;
    var  context = {
        count: request.session.count
    }
    console.log(request.session.count)
    response.render('index.ejs', {count: context});

})
app.get("/reset", function (request, response){
    //check to see if session variable exists
    if(!request.session.count){
    request.session.count = 0;
                             }

    request.session.count=0;
    var  context = {
        count: request.session.count
    }
    console.log(request.session.count)
    response.render('index.ejs', {count: context});

})
app.listen(8000, function() {
  console.log("listening on port 8000");
})