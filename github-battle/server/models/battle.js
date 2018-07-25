const mongoose = require('mongoose')
var BattleSchema = new mongoose.Schema({
 name: {type: String, required: [true, "Name is required"]},
 score: {type: Number, required: [true, "Score is required"]},
 pic: {type: String, required: [true, "Pic is required"]} 
},{timestamps: true })
mongoose.model('Battle', BattleSchema); 
var Notes = mongoose.model('Battle') 
module.exports = mongoose.model("Battle");