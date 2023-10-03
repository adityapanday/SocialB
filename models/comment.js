const { Timestamp } = require('mongodb');
const mongoose =  require('mongoose');

const commentSchema = new  mongoose.Schema({
   comment: {
    type: String, // Corrected the typo here
    required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,   
      ref: 'user'
   },
   post: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'post'
   }
  
}, { timestamps: true });  

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;  
