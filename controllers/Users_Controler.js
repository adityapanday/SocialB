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

 


 
//signup
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

//login
module.exports.createSession = (req , res)=>{
  return res.redirect('/');
};

//this is for logout 
module.exports.destroy = (req, res) => {
  // Passport's req.logout() function with a callback
  req.logout(function (err) {
      if (err) {
          // Handle error, if any
          console.error(err);
          return res.redirect('/');  
      }
     
      return res.redirect('/users/signin');
  });
};


const Post = require('../models/post');
module.exports.post = async(req , res)=>{
   try {
    var a = Post.create(req.body);
    console.log("Posted");
    return  res.redirect('back');
   } catch (error) {
      console.log("Error in Posting " + error);
   }
};
