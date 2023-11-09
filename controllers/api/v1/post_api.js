const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req, res) {
    try {
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('User') 
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



module.exports.destroy = async function(req, res) {
    try {
        let post = await Post.findById(req.params.id);

        console.log('post.user:', post.User); // Log the post user ID
        console.log('req.user.id:', req.User.id); // Log the authenticated user's ID

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        if (post.User.toString() === req.user.id.toString()) {
            // Ensure that you're using the `toString()` method to compare IDs
            post.remove();

            await Comment.deleteMany({ post: req.params.id });

            return res.status(200).json({
                message: "Post and associated comments deleted successfully!"
            });
        } else {
            return res.status(401).json({
                message: "Unauthorized to delete this post"
            });
        }
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}