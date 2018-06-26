var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/cats", function (request, response){
   
    response.render('cats.ejs');

})
app.get("/cars", function (request, response){
   
    response.render('cars.ejs');

})
app.get("/cars/new", function (request, response){
   
    response.render('form.ejs');

})
app.listen(8000, function() {
  console.log("listening on port 8000");
})