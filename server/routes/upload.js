const express = require('express');
const router = express.Router();

const multer = require('multer');
const fs = require('fs');
const DIR = '../uploads';

const upload = multer({dest: DIR});

// multer setup
router.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}).any());

router.get('/', (req, res) => {
  console.log('Uploader here');
  res.end('file catcher example')
})

router.post('/', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end(err.toString());
    }

    res.end('File is uploaded');
  });
});

module.exports = router;
