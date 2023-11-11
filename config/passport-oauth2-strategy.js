const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: "175467165158-p042dm6gi6kn8bbristbf3nf54ipnn01.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/users/auth/google/callback",
},
async function(accessToken, refreshToken, profile, done){
    try {
        // find a user
        const user = await User.findOne({ email: profile.emails[0].value });

        console.log(accessToken, refreshToken);
        console.log(profile);

        if (user){
            // if found, set this user as req.user
            return done(null, user);
        } else {
            // user not in our database
            const newUser = await User.create({
                Name: profile.displayName,
                Email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            });

            return done(null, newUser);
        }
    } catch (err) {
        console.error('Error in Google strategy-passport', err);
        return done(err);
    }
}));

module.exports = passport;
