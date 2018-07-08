
const mongoose = require('mongoose'),
      Quote = mongoose.model('Quote')

module.exports = function(app) {
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
}