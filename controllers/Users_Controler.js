const User = require('../models/user');
// module.exports.profile = async(req , res)=>{
//   //req.cookie.User_id this is checking if user is sign in then only he can open profile
//   //bcoz user id wil be stored in cookie

//   try{ if(req.cookies.user_id){
//       const val = await User.findById(req.cookies.user_id);
//       console.log("val ki value"+val );
//       if(val){
//         res.render('profile' , {User:val});
//       }else{
//         return res.redirect('/users/signin');
//       }
//  }else{
//   return res.send("iii"+req.cookies.user_id);
//   console.log("try ka andar cookie nahi mile");
//      return res.redirect('/users/signin');
//  }
// }catch(err){
//   console.log(err);
//   console.log("error in finding cookie");
//   return res.render('user_sign_in');
// }
// };


module.exports.profile = async function (req, res) {
  try {
    //user_id hoga Object vali jagha
    if (req.cookies.ObjectId) {
      const user = await User.findById(req.cookies.ObjectId);

      if (user) {
        return res.render('profile', {
          title: "User Profile",
          User: user,
        });
      } else {
        console.log("User not found");
        return res.redirect('/users/signin');
      }
    } else {
      console.log("Cookie not found");
      return res.redirect('/users/signin');
    }
  } catch (error) {
    console.error(error);
    console.log("Error in finding user by ID");
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
