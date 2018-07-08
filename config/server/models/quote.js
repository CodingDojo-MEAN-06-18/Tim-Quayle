const mongoose = require('mongoose')
      //Quote = mongoose.model('Quote')
//module.exports =  {
var QuoteSchema = new mongoose.Schema({
 name: {type: String, required: true},
 quote:{type: String, required: true}
},{timestamps: true })

mongoose.model('Quote', QuoteSchema);            
module.exports = mongoose.model("Quote");