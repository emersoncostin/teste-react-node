var express = require("express");

var router = express.Router();

router.get('/download/:id', function (req, res, next) {

    const file = `${__dirname}/../uploads/${req.params.id}`;
    console.log(req.params.id)
    res.download(file);    

})

module.exports = router;