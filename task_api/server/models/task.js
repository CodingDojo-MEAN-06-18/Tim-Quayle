const mongoose = require('mongoose')
      //Quote = mongoose.model('Quote')
//module.exports =  {
var TaskSchema = new mongoose.Schema({
 title: {type: String},
 description: {type: String, default: ''},
 completed: {type: Boolean, default: false}
},{timestamps: true })

mongoose.model('Task', TaskSchema);            
module.exports = mongoose.model("Task");