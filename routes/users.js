const express = require('express');
const router = express.Router();
const Users_controler = require('../controllers/Users_Controler');


router.get('/profile' , Users_controler.profile);
router.get('/edit' , Users_controler.edit);
router.get('/signin' , Users_controler.signin);
router.get('/signup' , Users_controler.signup);

//to create user 
router.post('/create' , Users_controler.create);


module.exports = router;