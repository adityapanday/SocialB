const User = require('../models/user');
const passport = require('passport');
const fs = require('fs');
const path = require('path');



module.exports.profile = async(req , res)=>{
 const val = await User.findById(req.params.id);

   
   return res.render('user' ,
   {
    profile_user : val
   }
   
   
   );
    
};

//profile edit
// module.exports.update = async (req , res )=>{
//    try {
//     if(req.user.id == req.params.id){
//     //  const update = await User.findByIdAndUpdate(req.params.id ,   {Email : req.body.Email , Name : req.body.Name});
//     //  if(!update){
//     //   console.log("Error in updation ");
//     //   return res.redirect('back');
//     //  } 
//     //  console.log("Suscessfully updated ");
//     //  return res.redirect('back');
//      const update = await User.findById(req.params.id);
//         User.uplodedAvatar(req , res , function(err){
//           if(err){ console.log("error in multer ******" + err)}
//           user.Name = req.body.Name ;
//           user.Email = req.body.Email;
          
//           if(req.file){
//             // console.log(req.file);
//              update.avatar = User.avatarPath + '/' + req.file.originalname;
//           }
//           // user.save();
//           update.save();
           
//           return res.redirect('back');
//         });
//       }
//    } catch (error) {
//        console.log("catch ma error " + error);
//        return res.status(200);
//    }

// };


module.exports.update = async function(req, res) {
  if (req.user.id == req.params.id) {
      try {
          let user1 = await User.findById(req.params.id);
          User.uplodedAvatar(req, res, function(err) {
              if (err) {
                  console.log('*****Multer Error: ' + err);
              }

              user1.Name = req.body.Name;
              user1.Email = req.body.Email;

              if (req.file) {


                //  if(user1.avatar){
                //   fs.unlinkSync(path.join(__dirname , '..',user1.avatar));
                //  }
 
                  user1.avatar = User.avatarPath +'/' + req.file.filename;
              }

              user1.save();
              console.log(req.file);
              res.redirect('back');
          });
      } catch (err) {
          console.log("error in multer catch: " + err);
          return res.redirect('back');
      }
  } else {
      console.log("user not defined");
      return res.status(401).send('Unauthorized');
  }
};
// data base ma ek bar .. hata kar dakho 


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



////////////////////////////////////////////////////////posts ////////////////////////////////////////////////////////////////


const Post = require('../models/post');
const { application } = require('express');
module.exports.post = async(req , res)=>{
  try {
   var a = Post.create({
     Content:req.body.Content ,
      User: req.user._id
   });
   // Checking if the request is an XHR (Ajax) request
   if (req.xhr) {
    return res.status(200).json({
      data: {
        post: a
      },
      message: "Post created"
    });
  }

   if(a){
     console.log("Posted");
     return  res.redirect('back');
   }
   console.log("error in storing post in data base");
   return res.redirect('back');
   
  } catch (error) {
     console.log("Error in Posting " + error);
  }
};

//delete post 
const Comment = require('../models/comment');
const user = require('../models/user');


module.exports.destroy2 = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      console.log('Post not found');
      return res.redirect('back');
    }

    if (post.User == req.user.id) {
      await post.deleteOne();
  
      await Comment.deleteMany({ post: req.params.id });
      return res.redirect('back');
    } else {
      return res.redirect('back');
    }
  } catch (err) {
    console.error('Error in getting post:', err);
    return res.redirect('back');
  }
};
                                                                        
                                                                                                                                                   
                                      
                                                
                                                 
                          
                             
                                      