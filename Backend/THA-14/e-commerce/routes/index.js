var express = require('express');
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerCheck");
var {register, registerSuperAdmin} = require("../controllers/register");
var check = require("../middlewares/checkSuperAdmin"); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register", registerInitialCheck, register)
router.post("/register-super-admin", registerInitialCheck, registerSuperAdmin)
router.get("/super", check);

module.exports = router;
