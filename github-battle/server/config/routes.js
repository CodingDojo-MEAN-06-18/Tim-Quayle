const battles = require('../controllers/battles.js')
const path = require('path');
module.exports = function(app) {

  app.post('/addscore', (req, res, next) =>{
    
    console.log('we are posting data');
    battles.addscore(req, res);
  })

  app.get('/getscores', (req, res, next) =>{
    console.log('getting scores');
    battles.getscores(req, res);
    
  })
  app.all("*", (req,res,next) => {    
        res.sendFile(path.resolve("./github-battle/dist/github-battle/index.html"))
                                 })
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
  };
