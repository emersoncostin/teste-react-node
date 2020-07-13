var express = require("express");

var router = express.Router();

router.get('/', function (req, res, next) {


        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://emerson:TUC7pIspkZRCbALF@costin.t3chz.mongodb.net/mentores?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {

            const collection = client.db("mentores").collection("uploads");

            collection.find({},{ originalname: 1, size: 1}).toArray(function(err, result){
                if (err) throw err;
                console.log(result);
                client.close();
                return res.send(result)
            })

        });
    
  })

module.exports = router;