var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', (req, res, next)=> {
 
    res.send({test:"success"});
});

router.post('/post',(req,res)=>{
    res.send({data:req.body.data})
})
module.exports = router;
