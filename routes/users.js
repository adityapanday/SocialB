const express = require('express');
const router = express.Router();
const Users_controler = require('../controllers/Users_Controler');
const passport = require('passport');
 


router.get('/profile/:id',passport.checkAuthentication , Users_controler.profile);
router.get('/edit' , Users_controler.edit);
router.get('/signin' , Users_controler.signin);
router.get('/signup' , Users_controler.signup);
//for logout rout
router.get('/signout' ,Users_controler.destroy);

//to create user 
router.post('/create' , Users_controler.create);
//edit user
router.post('/update/:id' , Users_controler.update);

//yad rakho router takes middle ware too 
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'},
), Users_controler.createSession);










module.exports = router;