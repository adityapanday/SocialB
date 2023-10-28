const express = require('express');
const router = express.Router();
const postapi=  require('../../../controllers/api/v1/post_api');
const passport = require('passport');

router.get('/' , postapi.index);
router.delete('/:id',passport.authenticate('jwt' , {session:false})  , postapi.destroy);

module.exports = router;