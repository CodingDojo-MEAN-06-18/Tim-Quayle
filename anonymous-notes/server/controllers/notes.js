
const Notes = require("../models/anon.js");
module.exports = {


   
 notesadd: function(req, res) {
     //const note = req.body;
     console.log("passed note:",req.body.note);
     const note = new Notes({note: req.body.note});
     note.save();
},
 
notesget: function(req,res) {
    Notes.find({},function(err, notes) {
         //console.log("REQueST:",req);
         //console.log("RESPONSE:",res);
      if(err) {
            console.log('something went wrong');
            console.log(err);
          }
          else {
            console.log("notes get is working!!!!!!!!")
            console.log(notes);
            res.json(notes);
                
           // })
          
                }
          })
                          },
           

}
