const mongoose = require('mongoose');

const userschema = new  mongoose.Schema({
    Email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type : String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }


},{timestamps:true});
const user = mongoose.model('user' , userschema);
module.exports = user; 