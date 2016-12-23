const express = require('express');
const passport = require('passport');
const router = express.Router();

// const user = require('./user'); //remove me
const blog = require('./blog');
const comment = require('./comment');

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index');
});

// router.use('/user', user)
router.use('/blog', blog)
router.use('/comment', comment)

module.exports = router;
