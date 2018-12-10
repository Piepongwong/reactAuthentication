var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  if(req.body.password === "12345") {
    res.cookie("loggedIn", "true")
    res.status(200).send("ok")
  } else {
    res.status(404).send("invalid")
  }
});

router.get("/profile", function(req, res){
  debugger
  if(req.cookies.loggedIn == "true") {
    res.json({
      firstname: "Jurgen",
      lastname: "Tonneyck",
      email: "j.tonneyck@gmail.com"
    })
  } else {
    res.status(404).send("not signed in")
  }
})

module.exports = router;
