const express = require('express');
const router = express.Router();
const passport = require('passport');

const Users_Controler = require('../controllers/Users_Controler');


//for post
router.post('/posts' , passport.checkAuthentication ,  Users_Controler.post);
router.get('/destroy/:id' , passport.checkAuthentication ,  Users_Controler.destroy2);

module.exports = router;