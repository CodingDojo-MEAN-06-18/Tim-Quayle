
//const mongoose = require('mongoose');
const Task = require("../models/task.js");
//Quote = mongoose.model('Quote')
//Retrieve
module.exports = {
gettasks: function(req, res) {
      Task.find({}, function(err, tasks){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err})
               }
        else {
            // respond with JSON
           res.json({tasks})
             }
                                        })
                          },    


 newtask: function(req,res) {
  const newtask = req.params.task
  const task = new Task({title: newtask});
  task.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
                 console.log(err)
                 console.log('something went wrong');
                 res.json({err})
            } 
    else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a Task!');
      res.json({task: task})
         }
                             })
                              },

  
updatetask: function(req, res) {
     var newtask= req.params.task
     var newcomplete = req.params.complete
     
     console.log(req.params)
      Task.update({title: newtask},{$set : {"description": req.body.description, "completed": newcomplete} },function(err, tasks) {
                if(err) {
                 console.log(err)
                 console.log('something went wrong');
                 res.json({err})
                        } 
               else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully updated a Task!');
                    res.json(tasks)                                                                   
                    } 
                                                                                                                                         })
                               },
  deletetask: function(req,res) {
     const newtask = req.params.task
     Task.remove({title: newtask},function(err, task) {
     if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err})
            }
        else {
            
            if(task.n===0){
                      res.json({task: "No such Task!"})
                     }
           
            else {

                  res.json({task})
                 }
             }
                                                     })


},
getonetask: function(req,res) {
     const newtask = req.params.task
     Task.findOne({title: newtask},function(err, task) {
     if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err})
            }
        else {
            
            if(!task){
                      res.json({task: "No such Task!"})
                     }
           
            else {

                  res.json({task})
                 }
             }
                                                     })

                           }
}