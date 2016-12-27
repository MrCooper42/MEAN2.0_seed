const express = require('express');
const passport = require('passport');
const router = express.Router();

const api = require('./api'); 
const profile = require('./profile');
const blog = require('./blog');
const comment = require('./comment');

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index');
});

router.use('/api', api)
router.use('/profile', profile)
router.use('/blog', blog)
router.use('/comment', comment)

module.exports = router;
