const notes = require('../controllers/notes.js')
const path = require('path');
module.exports = function(app) {

  app.post('/notesadd', (req, res, next) =>{
    
    console.log('we are posting data');
    notes.notesadd(req, res);
  })

  app.get('/notesget', (req, res, next) =>{
    console.log('in notesget');
    notes.notesget(req, res);
    //quotes.show(req, res);
  })
  app.all("*", (req,res,next) => {    
        res.sendFile(path.resolve("./anonymous-notes/dist/anonymous-notes/index.html"))
                                 })
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
  };
