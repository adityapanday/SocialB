const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// authentication using passport

passport.use(new LocalStrategy({
    usernameField: 'Email'
}, async function (Email, password, done) {
    try {
        const user = await User.findOne({ Email: Email });

        if (!user || user.password !== password) {
            console.log('Invalid Username/Password');
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        console.error('Error in finding user --> Passport');
        return done(err);
    }
}));

// Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// Deserializing the user from the key in the cookies
passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        console.error('Error in finding user --> Passport');
        return done(err);
    }
});

//bs middle ware ka lia banaya hai
passport.checkAuthentication = async (req, res, next) => {
    if (req.isAuthenticated()) {
      // If the user is authenticated (logged in), continue to the next middleware/route handler
      next();
    } else {
      // If the user is not authenticated, redirect them to the sign-in page
      return res.redirect('/users/signin');
    }
  };
  


passport.setAuthenticatedUser= async (req , res , next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    } 
    next();
}

module.exports = passport;