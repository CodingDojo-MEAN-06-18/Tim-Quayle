
//const mongoose = require('mongoose');
const Age = require("../models/1955.js");
//Quote = mongoose.model('Quote')

module.exports = {
index: function(req, res) {
      Age.find({}, function(err, people){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err})
               }
        else {
            // respond with JSON
           res.json({people})
             }
                                        })
                          },    


addname: function(req,res) {
  const newname = req.params.name
  const newperson = new Age({name: newname});
  newperson.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
                 console.log(err)
                 console.log('something went wrong');
                 res.json({err})
            } 
    else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a person!');
      res.redirect('/')
         }
                             })
                              },

  removename: function(req,res) {
     const newname = req.params.name
     Age.remove({name: newname},function(err, name) {
     console.log(name.n)
     if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err})
            }
        else {
            
            if(name.n===0){
                      res.json({name: "No such Person!"})
                     }
           
            else {

                  res.json({name})
                 }
             }
                                                     })


},
getname: function(req,res) {
     const newname = req.params.name
     Age.findOne({name: newname},function(err, name) {
     if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err})
            }
        else {
            
            if(!name){
                      res.json({name: "No such Person!"})
                     }
           
            else {

                  res.json({name})
                 }
             }
                                                     })

                           }
}