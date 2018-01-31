var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('My deployment github repository can be found at https://github.com/Vertipae/DeployToAzure');
});

module.exports = router;
