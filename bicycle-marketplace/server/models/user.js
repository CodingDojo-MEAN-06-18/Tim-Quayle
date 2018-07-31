const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    
firstname: {type: String, required: [true, "name is required"]},
lastname: {type: String, required: [true, "lastname is required"]},
email: {type: String, required: [true, "email is required"]},
password: {type: String, required: [true, "password is required"]},
},{timestamps: true })
mongoose.model('Users', UsersSchema); 
const Users = mongoose.model('Users') 
module.exports = mongoose.model("Users");

