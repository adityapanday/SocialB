const express = require('express');
const router = express.Router();
const passport = require('passport');
const commentControler = require('../controllers/Comment_Controler');

router.post('/create' , commentControler.create);
router.get('/destroy/:id' ,  passport.checkAuthentication ,commentControler.destroy);


module.exports = router;