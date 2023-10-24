const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req, res) {
    try {
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('User')  // Corrected field name from 'User' to 'user'
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            });

        return res.status(200).json({
            message: "List of posts",
            posts: posts
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error while fetching posts",
            error: err
        });
    }
}

// module.exports.destroy = async function(req, res){

//     try{
//         let post = await Post.findById(req.params.id);

//         // if (post.user == req.user.id){
//             post.remove();

//             await Comment.deleteMany({post: req.params.id});


    
//             return res.json(200, {
//                 message: "Post and associated comments deleted successfully!"
//             });
//         // }else{
//         //     req.flash('error', 'You cannot delete this post!');
//         //     return res.redirect('back');
//         // }

//     }catch(err){
//         console.log('********', err);
//         return res.json(500, {
//             message: "Internal Server Error"
//         });
//     }
    
// }
module.exports.destroy = async function (req, res) {
    try {
        // Use findByIdAndDelete to delete the post
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        // Delete associated comments
        await Comment.deleteMany({ post: req.params.id });

        return res.status(200).json({
            message: "Post and associated comments deleted successfully!"
        });
    } catch (err) {
        console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}