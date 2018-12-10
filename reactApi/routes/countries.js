var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var countries = require("../countries.json")

    res.json(countries)
});

module.exports = router;
