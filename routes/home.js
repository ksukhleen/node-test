var express = require("express");
var router = express.Router();
/* GET users listing. */
const crypto = require('crypto')

router.get('/time', (req, res, next) => {
    res.send({time: new Date().toISOString()
    })
})

router.post('/hash', (req, res, next) => {
    const plainText = req.body.plainText;
    const hash = crypto.createHash('md5').update(plainText).digest('hex')
    res.json({
        plainText,
        hash
    })
})

router.get("/h", (req, res, next) => {
    res.render('index', {name: "ppp"})
   });
module.exports = router;