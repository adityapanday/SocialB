const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;


//this below line is added to extract from header encrypted msg ........
const ExtractJwt = require('passport-jwt').ExtractJwt;

//lets make a secrer key for encryption 
//TODO change at deployment add file in git ignore 
const  secret1 = 'Aditya';

const User = require('../models/user');
var opts = { 
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : secret1
}

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    User.findById(jwtPayLoad._id, function(err, user){
        if (err){console.log('Error in finding user from JWT'); return;}

        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;
