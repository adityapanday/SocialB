//very fist file or mother file 

const express = require('express');
const router = express.Router();
const homecontroler =require('../controllers/Home_Controler');

router.get('/' , homecontroler.home);
console.log("inside router");


module.exports = router;