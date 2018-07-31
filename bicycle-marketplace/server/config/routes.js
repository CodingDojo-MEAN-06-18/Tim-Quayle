const bikes = require('../controllers/bikes.js')
const users= require('../controllers/users.js')
const path = require('path');
module.exports = function(app) {
  app.get('/searchbikes/:search',(req, res, next) =>{
    console.log('we are searching - express',req.params.search);
   bikes.bikesSearch(req, res);
  })
  app.get('/removesessionid',(req, res, next) =>{
    console.log('we are removing the session id');
   users.removesessionid(req, res);
  })
  app.get('/getsessionid',(req, res, next) =>{
    console.log('we are getting the session id');
   users.getsessionid(req, res);
  })
  app.get('/getcontact/:id',(req, res, next) =>{
    console.log('we are getting contact info',req.params.id);
   users.getcontact(req, res);
  })
  app.post('/updatebike', (req, res, next) =>{
    console.log('server side UPDAting bike');
    bikes.bikeupdate(req, res);
  })
  app.delete('/delbike/:id', (req, res, next) =>{
    console.log('we are deleting a bike ',req.params.id);
   bikes.bikesdel(req, res);
  })
  app.get('/getmybikes', (req, res, next) =>{
    console.log('geting all bikes');
    bikes.bikesgetmine(req, res);
  })
  app.get('/getallbikes', (req, res, next) =>{
    console.log('geting all bikes');
    bikes.bikesgetall(req, res);
  })
  app.post('/createbike', (req, res, next) =>{
    console.log('server side making bike');
    bikes.bikesadd(req, res);
  })
  app.post('/uploadpic', (req, res, next) =>{
    
    console.log('server side upload pic');
    console.log(req);
    //bikes.usersadd(req, res);
  })
 
  app.post('/postreg', (req, res, next) =>{
    
    console.log('we are posting data');
    users.usersadd(req, res);
  })
  app.post('/postlog', (req, res, next) =>{
    
    console.log('we are posting data login');
    users.logincheck(req, res);
  })

  app.get('/notesget', (req, res, next) =>{
    console.log('in notesget');
    //notes.notesget(req, res);
    //quotes.show(req, res);
  })
  app.all("*", (req,res,next) => {    
        res.sendFile(path.resolve("./bicycle-marketplace/dist/bicycle-marketplace/index.html"))
                                 })
  app.listen(8000, function() {
   console.log("listening on port 8000");
});
  
                                };
