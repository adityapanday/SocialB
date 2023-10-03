const express = require('express');
const router = express.Router();

const commentControler = require('../controllers/Comment_Controler');

router.post('/create' , commentControler.create);


module.exports = router;