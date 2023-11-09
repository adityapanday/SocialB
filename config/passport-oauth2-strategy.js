const passport = reqire('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const crypto = require('crypto');
const User = require('../models/user'); 

// passport.use(new GoogleStrategy({
//     clientID: 175467165158-p042dm6gi6kn8bbristbf3nf54ipnn01.apps.googleusercontent.com,
//     clientSecret: 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,
//     callbackURL: "http://localhost:8000/users/auth/google/callback"
//   },
//   //            **** if token gets expired "refreshToken" will auto generate new Token ****
//   function(accessToken, refreshToken, profile, done) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });

//   }
// ));

// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
    clientID: '<YOUR_GOOGLE_CLIENT_ID>', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
    clientSecret: '<YOUR_GOOGLE_CLIENT_SECRET>', // e.g. _ASDFA%KFJWIASDFASD#FAD-
    callbackURL: "http://localhost:8000/users/auth/google/callback",
},
// **** if token gets expired "refreshToken" will auto generate new Token ****
function(accessToken, refreshToken, profile, done){
    // find a user
    User.findOne({email: profile.emails[0].value}).exec(function(err, user){
        if (err){console.log('error in google strategy-passport', err); return;}
        console.log(accessToken, refreshToken);
        console.log(profile);

        if (user){
            // if found, set this user as req.user
            return done(null, user);
        }else{
            // if not found, create the user and set it as req.user
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, function(err, user){
                if (err){console.log('error in creating user google strategy-passport', err); return;}

                return done(null, user);
            });
        }

    }); 
}


));


module.exports = passport;
