var express = require("express");
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file')

var router = express.Router();

router.post('/', function (req, res, next) {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

module.exports = router;