const express = require('express');
const passport = require('passport');
const router = express.Router();

const auth = require('./auth'); //remove me
const profile = require('./profile'); //remove me
const blog = require('./blog');
const comment = require('./comment');

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index');
});

router.use('/auth', auth)
router.use('/profile', profile)
router.use('/blog', blog)
router.use('/comment', comment)

module.exports = router;
