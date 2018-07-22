const mongoose = require('mongoose')
const TeamManageSchema = new mongoose.Schema({
    
    name: {type: String, required: [true, "name is required"]},
 position: {type: String },
 status: [{type: Number}],
},{timestamps: true })
mongoose.model('Team', TeamManageSchema); 
const Notes = mongoose.model('Team') 
module.exports = mongoose.model("Team");