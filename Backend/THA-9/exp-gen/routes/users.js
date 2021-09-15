var express = require('express');
var router = express.Router();
const path = require("path");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/file/:name', function(req, res, next) {
  const name = req.params.name
  console.log("Hello",__dirname);
  res.sendFile(path.join(__dirname, "../public/"+name))
  // res.send('respond with a resource');
});

module.exports = router;
