
const Badger = require("../models/badger.js");
module.exports = {

newget: function(req,res){
  
        res.render('new');
                          },
                                      

badgersrootpost:  function(req, res) {
  console.log("POST DATA", req.body);
  
  const badger = new Badger({name: req.body.name, age: req.body.age, ffood: req.body.ffood});
  
  badger.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log(err)
      console.log('something went wrong');
         for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
                                   }
            // redirect the user to an appropriate route
            res.redirect('/badgers/new');
    
              } 
     else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
      Badger.find({}, function(err, badgers) {
      console.log(badgers)
      res.render('index',{badgers: badgers });
                                              })

  
             }
                              })
                                     },
rootget: function(req,res) {
      Badger.find({},function(err, badgers) {
      res.render('index',{badgers: badgers });
                                             })
                            },
   
badgersget: function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.find({_id: bid},function(err, badgers) {
      console.log(badgers) 
      res.render('display',{badgers: badgers });
                                                     })
                                  },
badgerseditget: function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.find({_id: bid},function(err, badgers) {
      console.log(badgers) 
      res.render('edit',{badgers: badgers });
    })
                                   }, 
badgerspost: function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.update({_id: bid},{$set : {"name": req.body.name, "age": req.body.age, "ffood": req.body.ffood} },function(err, badgers) {
      console.log("Error: ",err) 
      res.redirect('/');
                                                                                                                                       })
                                }, 
badgersdestroyget: function(req, res) {
     var bid = req.params.foo
     //console.log(bid)
      Badger.remove({_id: bid},function(err, badgers) {
      //console.log(badgers) 
      res.redirect('/');
                                                     })
                                       }
                     }