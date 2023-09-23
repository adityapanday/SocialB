const User = require('../models/user');
module.exports.profile = async(req , res)=>{
  //req.cookie.User_id this is checking if user is sign in then only he can open profile
  //bcoz user id wil be stored in cookie
  // return res.send(req.cookie);

  try{ if(req.cookie.user_id){
      const val = await User.findById(req.cookie.user_id);
      if(val){
        res.render('profile' , {User:val});
      }else{
        return res.redirect('/users/signin');
      }
 }else{
  console.log("try ka andar cookie nahi mile");
     return res.redirect('/users/signin');
 }
}catch{
  console.log(req.cookie);
  console.log("error in finding cookie");
  return res.render('user_sign_in');
}
};

// module.exports.profile = (req , res)=>{
//   // res.send("profile ma dikkat");
//   return res.render('profile');
  
    
// };

module.exports.edit = (req , res)=>{
   res.end("user ko edit karna hai ");
};

module.exports.signup = (req , res)=>{
    res.render('user_sign_up' , {title:"sign up page"});
}; 
module.exports.signin = (req , res)=>{
    res.render('user_sign_in' , {title:"sign in page"});
};

 
// const User = require('../models/user');



module.exports.create = async (req, res) => {
  if (req.body.Password != req.body.ConfirmPassword) {
    console.log("password math nahi ho reha hai");
    return res.redirect('back');
  }
  try {
    const user = await User.create(req.body);
    console.log("User Created");
    // You can add additional logic here if needed
    return res.redirect('/users/signin');
  } catch (err) {
    console.error("Error in storing in the database: catch ka aandar __________", err);
    return res.redirect('back');
  }
};

 
module.exports.createSession = async(req , res)=>{
    try{
      const val =  User.findOne({Emali :req.body.Email});
      if(User){
        if(req.body.Password == val.Password){
            res.cookie('User_id' , User.id);
            return res.redirect('/users/profile');
        }else{
          console.log("Password not matching");

          return res.redirect('back');
        } 
      }
    }catch{
      console.log("error in user Email");
    }
};