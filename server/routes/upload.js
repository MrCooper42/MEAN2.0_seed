const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const multer = require('multer');
const fs = require('fs');
const mkdirp = require('mkdirp')

let DIR = './server/uploads/';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    mkdirp.sync(DIR)
    console.log(DIR, "DIR");
    cb(null, DIR);
  },
  filename: function(req, file, cb) {
    let datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
})

const upload = multer({storage: storage}).single('file');

router.post('/', (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.decode(token)
  DIR = `./server/uploads/${decoded.user._id}/`
  upload(req, res, (err) => {
    console.log(req.file, "req.file");
    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    res.json({error_code: 0, err_desc: null});
  });
});

module.exports = router;
