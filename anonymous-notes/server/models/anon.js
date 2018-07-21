const mongoose = require('mongoose')
var AnonNoteSchema = new mongoose.Schema({
 note: {type: String, required: [true, "Note is required"]},
},{timestamps: true })
mongoose.model('Notes', AnonNoteSchema); 
var Badger = mongoose.model('Notes') 
module.exports = mongoose.model("Notes");