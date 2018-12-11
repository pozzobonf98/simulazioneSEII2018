const express = require('express');
const router = express.Router();

router.route('/')
.get(async function (req, res){
    res.status(200)
    var result = string_square(req.query.string)
    res.json({result:result })
});



function string_square(s){
    if (typeof(s) == "string"){
        var x = s.length
        return Math.pow(x, 2);
    }else{
        return -1
        }
    }

module.exports = router;