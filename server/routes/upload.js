const express = require('express');
const router = express.Router();

const multer = require('multer');
const fs = require('fs');
const DIR = './server/uploads/';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, DIR);
  },
  filename: function(req, file, cb) {
    let datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
})

const upload = multer({
  storage: storage
}).single('file');

// multer setup
// router.use(multer({
//   dest: DIR,
//   rename: function(fieldname, filename) {
//     return filename + Date.now();
//   },
//   onFileUploadStart: function(file) {
//     console.log(file.originalname + ' is starting ...');
//   },
//   onFileUploadComplete: function(file) {
//     console.log(file.fieldname + ' uploaded to  ' + file.path);
//   }
// }).any());

// router.get('/', (req, res) => {
//   console.log('Uploader here');
//   // res.end('file catcher example')
// })

router.post('/', (req, res) => {
  upload(req, res, (err) => {
    console.log(req.file, "req.file");
    if (err) {
      res.json({error_code:1,err_desc:err});
      return;
    }
    console.log(req.body, "req body");
    console.log(req.file, "req files");
    res.json({error_code:0,err_desc:null});
  });
});

// router.post('/', upload.any(), (req, res, next) => {
//   console.log(req.body, "req body");
//   console.log(req.files, "req files");
//   res.end('File is uploaded');
// })

module.exports = router;
