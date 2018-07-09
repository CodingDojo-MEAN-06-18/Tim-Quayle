const mongoose = require('mongoose')
      //Quote = mongoose.model('Quote')
//module.exports =  {
var AgeSchema = new mongoose.Schema({
 name: {type: String, required: true},
},{timestamps: true })

mongoose.model('Age', AgeSchema);            
module.exports = mongoose.model("Age");