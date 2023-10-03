const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = async(req , res)=>{
   try {
    const a = Comment.create({
        comment : req.body.comment,
        user:req.user._id,
        post:req.body.post
            
    });
    if(!a){
        console.log("commnt not created........");
        return res.redirect('back');
    }
    console.log('commet created Sucessfully');
    return res.redirect('back');
   } catch (error) {
    console.log("commnt not created........in catch" + error);    
        return res.redirect('back');
   }

}            