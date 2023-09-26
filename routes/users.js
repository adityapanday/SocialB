const express = require('express');
const router = express.Router();
const Users_controler = require('../controllers/Users_Controler');
const passport = require('passport');


router.get('/profile',passport.checkAuthentication , Users_controler.profile);
router.get('/edit' , Users_controler.edit);
router.get('/signin' , Users_controler.signin);
router.get('/signup' , Users_controler.signup);

//to create user 
router.post('/create' , Users_controler.create);


//yad rakho router takes middle ware too 
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'},
), Users_controler.createSession);


module.exports = router;