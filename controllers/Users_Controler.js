module.exports.profile = (req , res)=>{
    res.end("inside the profile of user");
    
};

module.exports.edit = (req , res)=>{
   res.end("user ko edit karna hai ");
};

module.exports.signup = (req , res)=>{
    res.render('user_sign_up' , {title:"sign up page"});
};
module.exports.signin = (req , res)=>{
    res.render('user_sign_in' , {title:"sign in page"});
};