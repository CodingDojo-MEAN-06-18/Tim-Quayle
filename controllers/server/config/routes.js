
const quotes = require('../controllers/quotes.js')

module.exports = function(app) {
app.get('/', function(req, res) {
   quotes.index(req,res);
  })

app.post('/quotes', function(req, res) {
  quotes.postquotes(req,res);

})
app.get('/quotes', function(req, res) {
      quotes.getquotes(req,res);
  })

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
                                };