var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();
router.get("/api/burgers", function(req, res){
    console.log("in burrger");
    burgers.selectAll(function(data){
        console.log("data", data);
        res.json(data);
    })
})

module.exports = router;