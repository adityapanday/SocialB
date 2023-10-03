const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = async(req , res)=>{
//    try {
//     const a = Comment.create({
//         comment : req.body.comment,
//         user:req.user._id,
//         post:req.body.post
            
//     });
//     if(!a){
//         console.log("commnt not created........");
//         return res.redirect('back');
//     }
//     Post.comments.push(a);
//     Post.save();
    
//     console.log('commet created Sucessfully');
//     return res.redirect('back');
//    } 
try{
    let post = await Post.findById(req.body.post);
    if (post) {
      let comment = await Comment.create({
        comment: req.body.comment,
        user: req.user._id,
        post: req.body.post
      });
      post.comments.push(comment);
       post.save();
       console.log('commet created Sucessfully' + comment);
      res.redirect('/');
    } 
}catch (error) {
    console.log("commnt not created........in catch" + error);    
        return res.redirect('back');
   }

}            