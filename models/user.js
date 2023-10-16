const mongoose = require('mongoose');
const multer = require('multer');
//ma yahi multer user kar reha hu baki kar sakra hu index.js ma but mughe yahi convinent hai
const path = require('path');
const AVATAR_PATH = path.join('../uploads/users/avatars');



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
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname),'..',AVATAR_PATH)
//     },
//     filename: function (req, file, cb) {
//     //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + Date.now());
//     }
//   });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  }
});






//static              multer ki storage ma : apni const storage ko dala hia   //  single ki place pr we could have used array if multiple inputs hote
userschema.statics.uplodedAvatar = multer({storage : storage}).single('avatar');
//path ko globaly accesable banaya hai bs
userschema.statics.avatarPath = AVATAR_PATH;



const user = mongoose.model('user' , userschema);
module.exports = user; 