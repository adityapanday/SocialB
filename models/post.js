const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    Content:{
        type:String,
        required :true

    },
    User:{
         type : mongoose.SchemaTypes.ObjectId,
         ref :'user'
    },
    //name par dhayan do 
    comments :[{
        type : mongoose.SchemaTypes.ObjectId,
         ref :'comment'
    }]
},{timestamps:true});

const Post = mongoose.model('Post' , postSchema);
module.exports = Post;
