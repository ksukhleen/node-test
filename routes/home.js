var express = require("express");
var router = express.Router();
var hb = require('../database')()
/* GET users listing. */
const crypto = require("crypto");


//usual CRUD routine...

router.get('/', (req, res) => {
  hb.query("SELECT * FROM mysampletable", (err, rows, fields) => {
    if(err){
      console.log('ERROR IN DA HOUSE', err)
    }else{
      res.send(rows);
      console.log("sucessfull bitch", rows)
    }
  })
})


router.get('/:id', (req, res) => {
    hb.query("SELECT * FROM mysampletable WHERE ID = ?", [req.params.id], (err, rows, fields) => {
      if(err){
        console.log('ERROR IN DA HOUSE', err)
      }else{
        res.send(rows);
        console.log("sucessfull bitch", rows)
      }
    })
  })


// router.get("/time", (req, res, next) => {
//   res.send({ time: new Date().toISOString() });
// });

// router.post("/hash", (req, res, next) => {
//   const plainText = req.body.plainText;
//   const hash = crypto.createHash("md5").update(plainText).digest("hex");
//   res.json({
//     plainText,
//     hash,
//   });
// });

// router.post("/people", (req, res, next) => {
//     const id = req.body.id;
//     const name = req.body.name;
//     const hobbies = req.body.hobbies;

//     // const 
// })

// router.get("/h", (req, res, next) => {
//   res.render("index", { name: "ppp" });
// });
module.exports = router;
