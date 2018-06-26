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
app.get("/cats/junior", function (request, response){
    var cat_details = {
        name: "junior", 
        food: "kibble",
         age: "2", 
         spots: ["the bed","The floor"],
     }
    
        

    //response.render('users', {users: users_array});
    response.render('details.ejs',{cat: cat_details});

})
app.get("/cats/maggie", function (request, response){
    var cat_details = {
        name: "Maggie", 
        food: "Steak",
         age: "19", 
         spots: ["The closet", "The window sell"],
    }
    
        

    //response.render('users', {users: users_array});
    response.render('details.ejs',{cat: cat_details});

})
app.get("/cats/mouse", function (request, response){
    var cat_details = {
        name: "Mouse", 
        food: "Tuna",
         age: "18", 
         spots: ["Sweaters"]
        }
    
  response.render('details.ejs',{cat: cat_details});      
})
app.get("/cats/spike", function (request, response){
    var cat_details = {
        name: "Spike", 
        food: "Whatever you have",
         age: "22", 
         spots: ["Wherever your not","Don't touch me"]
     }
    
    
  response.render('details.ejs',{cat: cat_details});      
})

app.get("/cats", function (request, response){
   
    response.render('cats.ejs');

})
app.listen(8000, function() {
  console.log("listening on port 8000");
})