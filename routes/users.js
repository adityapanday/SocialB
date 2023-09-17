const express = require('express');
const router = express.Router();
const Users_controler = require('../controllers/Users_Controler');


router.get('/profile' , Users_controler.profile);
router.get('/edit' , Users_controler.edit);


module.exports = router;