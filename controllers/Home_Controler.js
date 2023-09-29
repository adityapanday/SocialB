const Post = require('../models/post');
const User = require('../models/user');
module.exports.home = async(req , res)=>{
       try{
        //////////////////////////////////////////////Do reffer the name in modal there is capitla User henve U is in populate
             const val =await Post.find({}).populate('User').exec();
             if(!val){
                console.log("post not fournd ......");
                return res.redirect('back');
             }
            // return  res.render('home' , {posts:val ,  body1 :"body ma hu mai" ,title :" this is Home"  });
            const val2for_User = await User.find({});
        return res.render('home', {
            title: "Codeial | Home",
            posts: val,   
            body1 :"body ma hu mai",
            User:val2for_User
        });



       }catch(err){
            console.log("bawal ho gya catch ma ho tmm " + err);
            return res.redirect('back');
       }
};

    