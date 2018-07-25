
const Battle = require("../models/battle.js");
module.exports = {


   
 addscore: function(req, res) {
     console.log("WNL" ,req.body.winner);
  //const note = req.body;
    //is the winner already in the database? if, no insert them
  
    Battle.find({name: req.body.winner.name },function(err, scores){
      if(scores.length===0){
        const battle = new Battle({name: req.body.winner.name , score: req.body.winner.score, pic: req.body.winner.pic});
        battle.save();
      }
    }) 
    //is the loser already in the database? if, no insert them
  
    Battle.find({name: req.body.loser.name },function(err, scores){
      if(scores.length===0){
        const battle = new Battle({name: req.body.loser.name , score: req.body.loser.score, pic: req.body.loser.pic});
        battle.save();
      }
    }) 
},
 
getscores: function(req,res) {
    Battle.find({},function(err, scores) {
         //console.log("REQueST:",req);
         //console.log("RESPONSE:",res);
      if(err) {
            console.log('something went wrong');
            console.log(err);
          }
          else {
            console.log("score  get is working!!!!!!!!")
            console.log(scores);
            res.json(scores);
                
           // })
          
                }
          })
                          },
           

}