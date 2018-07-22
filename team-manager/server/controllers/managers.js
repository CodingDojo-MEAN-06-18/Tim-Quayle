
const Team = require("../models/manage.js");
module.exports = {


  playeChangestatus: function(req, res) {
    console.log("in player change status controller!")
    Team.update({_id: req.body._id},{$set : {"status": req.body.status} },function(err, players) {
      console.log("Error: ",err) 
    })
    },

  
  playerRemove: function(req, res) {
  console.log("IN playerRemove!!");
    
   console.log("RPLAYERID:",req.body._id);
  //Team.remove({_id: req.body._id})
   Team.remove({_id: req.body._id},function(err, team) {
  if(err) {
    console.log("ERR",err);
          }
  })
  },
 
 playeradd: function(req, res) {
     let statarray = [];
     //key [0] = game 1, [1] = game 2, [2] = game3,  values: 0 = undecided(default), 1 = playing, 2 = not playing
     statarray[0] = 0;
     statarray[1] = 0;
     statarray[2] = 0;
     console.log(statarray);
     console.log("passed name:",req.body.name);
     const team = new Team({name: req.body.name, position: req.body.position, status: statarray });
     
     team.save();
},
 
playersget: function(req,res) {
    Team.find({},function(err, players) {
         
      if(err) {
            console.log('something went wrong');
            console.log(err);
          }
          else {
            console.log("player get is working!!!!!!!!")
            //console.log(players);
            res.json(players);
                
           // })
          
                }
          })
                          },
           

}