var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({result: 'you did it!'});
});

module.exports = router;
