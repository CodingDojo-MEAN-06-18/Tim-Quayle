var express = require("express");
//console.log("Let's find out what express is", express);
var bodyParser = require('body-parser');
// use it!

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/", function (request, response){
   console.log("HERE")
    response.render('index.ejs');

})
app.post("/result", function (request, response){
    
     var post_details = {
        name: request.body.name, 
        location: request.body.location,
        language: request.body.language,
        comments: request.body.comments
         
                         }
    response.render('results.ejs',{post: post_details});

})
app.listen(8000, function() {
  console.log("listening on port 8000");
})