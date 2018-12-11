const express = require('express');
const router = express.Router();

router.route('/')
.get(function (req, res){
    res.status(200)
    var result = string_square(req.query.string)
    res.json({result:result })
    res.status(200)
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