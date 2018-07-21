
const Notes = require("../models/anon.js");
module.exports = {


   
notesadd: function(req, res) {
     var bid = req.params.foo
     console.log("IN NOTESADDmnbmjbm.bk.jbkjlhlkhj")
    
},
 
notesget: function(req,res) {
    Notes.find({},function(err, notes) {
        if(err) {
            console.log('something went wrong');
            console.log(notes.errors);
          }
          else {
            console.log("notes get is working")
            console.log(notes);
            res.json(notes);
            
          }
                                           })
                          },
           

}