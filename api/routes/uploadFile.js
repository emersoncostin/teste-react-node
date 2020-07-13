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
        console.log(req.file)

        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://emerson:TUC7pIspkZRCbALF@costin.t3chz.mongodb.net/mentores?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {

        const collection = client.db("mentores").collection("uploads");

        let fileToSave = req.file;
        fileToSave.uploadDate = Date.now();

        collection.insert(fileToSave)
        
        client.close();
        });

        return res.status(200).send(req.file)

    })

    
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

module.exports = router;