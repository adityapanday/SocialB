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
       console.log('commet created Sucessfully' );
      res.redirect('/');
    } 
}catch (error) {
    console.log("commnt not created........in catch" + error);    
        return res.redirect('back');
   }

}            

module.exports.destroy = async function (req, res) {
  try {
      const comment = await Comment.findById(req.params.id);

      if (!comment) {
          console.log('Comment not found');
          return res.redirect('back');
      }

      
      if (comment.user.toString() === req.user.id.toString()) {
          const postId = comment.post;

          await Comment.deleteOne({ _id: req.params.id });

          
          await Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } });

          console.log('Comment deleted successfully');
          return res.redirect('back');
      } else {
          console.log('Unauthorized to delete this comment');
          return res.redirect('back');
      }
  } catch (err) {
      console.error('Error in deleting comment:', err);
      return res.redirect('back');
  }
};