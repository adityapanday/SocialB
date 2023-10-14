const mongoose = require('mongoose');
const multer = require('multer');
//ma yahi multer user kar reha hu baki kar sakra hu index.js ma but mughe yahi convinent hai
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uplods/users/avatars');



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
    },
    avatar:{
        type:String
    }


},{timestamps:true});

//copyeed from documentation of multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname),'..',AVATAR_PATH)
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + Date.now())
    }
  })





const user = mongoose.model('user' , userschema);
module.exports = user; 