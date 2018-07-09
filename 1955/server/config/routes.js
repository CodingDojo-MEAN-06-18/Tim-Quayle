
const age1955 = require('../controllers/1955s.js')

module.exports = function(app) {
app.get('/', function(req, res) {
   age1955.index(req,res);
  })

app.get('/new/:name', function(req, res) {
  age1955.addname(req,res);

})
app.get('/remove/:name', function(req, res) {
      age1955.removename(req,res);
  })

app.get('/:name', function(req, res) {
      age1955.getname(req,res);
  })
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
                                };