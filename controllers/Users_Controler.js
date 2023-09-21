module.exports.profile = (req , res)=>{
    res.end("inside the profile of user");
    
};

module.exports.edit = (req , res)=>{
   res.end("user ko edit karna hai ");
};

module.exports.signup = (req , res)=>{
    res.render('user_sign_up' , {title:"sign up page"});
};
module.exports.signin = (req , res)=>{
    res.render('user_sign_in' , {title:"sign in page"});
};

 
const User = require('../models/user');

const User = require('../models/user'); // Import your User model

module.exports.create = async (req, res) => {
  if (req.body.password !== req.body.ConfirmPassword) {
    return res.redirect('back');
  }
  try {
    const user = await User.create(req.body);
    console.log("User Created");
    // You can add additional logic here if needed
    return res.redirect('/signin');
  } catch (err) {
    console.error("Error in storing in the database:", err);
    return res.redirect('back');
  }
};


module.exports.createSession = (req , res)=>{

};