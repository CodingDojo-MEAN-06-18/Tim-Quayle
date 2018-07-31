const mongoose = require('mongoose');

const BikesSchema = new mongoose.Schema({
    
title: {type: String, required: [true, "Title is required"]},
price: {type: Number, required: [true, "Pric is required"]},
location: {type: String, required: [true, "Location is required"]},
description: {type: String, required: [true, "Description is required"]},
bikepic: {type: String},
userid: {type: String, required: [true, "user id is required"]},
},{timestamps: true })
mongoose.model('Bikes', BikesSchema); 
const Bikes = mongoose.model('Bikes') 
module.exports = mongoose.model("Bikes");