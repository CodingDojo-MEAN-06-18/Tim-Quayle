const badgers = require('../controllers/badgers.js')
module.exports = function(app) {
app.get('/badgers/new', function(req, res) {
   badgers.newget(req,res);
  })
app.post('/badgers', function(req, res) {
  badgers.badgersrootpost(req,res);
})
app.get('/', function(req, res) {
     badgers.rootget(req,res);
  }) 
app.get('/badgers/:foo', function(req, res) {
     badgers.badgersget(req,res);
  }) 
app.get('/badgers/edit/:foo', function(req, res) {
     badgers.badgerseditget(req,res);
  }) 
app.post('/badgers/:foo', function(req, res) {
     badgers.badgerspost(req,res);
  }) 
app.get('/badgers/destroy/:foo', function(req, res) {
    badgers.badgersdestroyget(req,res);
  }) 
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
  };
