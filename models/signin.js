const mongoose = require ('mongoose');

const Signinschema = mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }


});


const Signin = mongoose.model('Signin' , Signinschema);
module.exports = Signin;