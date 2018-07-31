const Bikes = require("../models/bike.js");
//const Users = require("../models/user.js");
//const bcrypt = require('bcrypt-as-promised');
module.exports = {


  

 
bikesadd: function(req, res) {
    //const note = req.body;

    console.log("SESSID ",req.session.userid);
    console.log("passed bike:",req.body);
     const bike = new Bikes({title: req.body.title, price: req.body.price,
                   description: req.body.description, userid: req.session.userid,
                   location: req.body.location, bikepic: req.body.bikepic});
     bike.save();

                          
                           },
bikesgetall: function(req,res)        {
  console.log("getting all bikes!")
  Bikes.find({}, function(err, bikes) {
                          console.log("FOUND BIKES:",bikes)
                          res.json(bikes);
})
                        },
bikesgetmine: function(req,res)        {
  console.log("getting all bikes!")
 console.log("requserid: ",req.session.userid);
  Bikes.find({userid: req.session.userid}, function(err, bikes) {
                          console.log("FOUND BIKES:",bikes)
                          res.json(bikes);
})     
          },

bikesdel: function(req,res) {

    console.log("DELETEing BIKE ",req.params.id)
    Bikes.remove({_id: req.params.id},function(err, bikes) {
       console.log(err);
      })
    },
    bikeupdate: function(req,res) {

        console.log("updating a bike BIKE ",req.body);
        Bikes.update({_id: req.body._id},{$set : {"title": req.body.title, "description": req.body.description, "location": req.body.location,
        "price": req.body.price} },function(err, badgers) {
            console.log("Error: ",err) 
          })
        
        },
       
        bikesSearch: function(req,res) {

            console.log("Searching for a bike ",req.params.search);
        console.log("ss:",req.params.search)
        Bikes.find({$or: [ {'title': { '$regex': req.params.search } }, {'location': { '$regex': req.params.search } },{ 'description': { '$regex': req.params.search} }  ] } ,function(err, bikes) {
          console.log("LEN",bikes.length) 
                if(bikes.length===0){
                res.json('negative');
                          }
                else {
                    res.json(bikes);
                }
            })
        }
    }