//very fist file or mother file 

const express = require('express');
const router = express.Router();
const homecontroler =require('../controllers/Home_Controler');

router.get('/' , homecontroler.home);





router.use('/users' , require('./users'));

module.exports = router;