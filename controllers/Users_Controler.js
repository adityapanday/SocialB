const User = require('../models/user');
const passport = require('passport');
module.exports.profile = (req , res)=>{
   return res.render('user');
    
};

module.exports.edit = (req , res)=>{
   res.end("user ko edit karna hai ");
};

module.exports.signup = (req , res)=>{
   if(req.isAuthenticated()){
    return res.redirect('/users/profile')
   }


    return res.render('user_sign_up' , {title:"sign up page"});
};
module.exports.signin = (req , res)=>{

  if(req.isAuthenticated()){
    return res.redirect('/users/profile')
   }

   return res.render('user_sign_in' , {title:"sign in page"});
};

 


 

module.exports.create = async (req, res) => {
  if (req.body.password !== req.body.ConfirmPassword) {
    console.log("password not matches")
    return res.redirect('back');
  }
  try {
    const user1 = await User.create(req.body);
    console.log("User Created");
    // You can add additional logic here if needed
    return res.redirect('/users/signin');
  } catch (err) {
    console.error("Error in storing in the database:", err);
    return res.redirect('back');
  }
};


module.exports.createSession = (req , res)=>{
  return res.redirect('/');
};