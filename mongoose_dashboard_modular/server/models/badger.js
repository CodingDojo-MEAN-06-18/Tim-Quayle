const mongoose = require('mongoose')
var BadgerSchema = new mongoose.Schema({
 name: {type: String, required: [true, "Badgers must have a name"]},
 age:{type: Number, required: true},
 ffood: {type: String, required: true},
},{timestamps: true })
mongoose.model('Badger', BadgerSchema); 
var Badger = mongoose.model('Badger') 
module.exports = mongoose.model("Badger");