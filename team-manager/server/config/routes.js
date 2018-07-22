const managers = require('../controllers/managers.js')
const path = require('path');
module.exports = function(app) {
   
    app.post('/players/changestatus', (req, res, next) =>{
    
        console.log('we are changeing status - node side');
        //console.log(req.body);
        managers.playeChangestatus(req, res);
      })
    app.post('/players/addplayer/dbadd', (req, res, next) =>{
    
    console.log('we are posting data');
    console.log(req.body);
    managers.playeradd(req, res);
  })

  app.get('/players/list/getplayers/', (req, res, next) =>{
    console.log('getting players - node!');
    managers.playersget(req, res);
   
  })
  app.post('/players/remove', (req, res, next) =>{
    
    console.log('we are removing a player - node');
    //console.log(req.body);
    managers.playerRemove(req, res);
  })

 
  app.all("*", (req,res,next) => {    
        res.sendFile(path.resolve("./team-manager/dist/team-manager/index.html"))
                                 })
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
  };
  
  
