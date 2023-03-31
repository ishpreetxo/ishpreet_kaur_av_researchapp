var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/audio', function (req, res, next) {
  res.render('audio', { title: 'audio Component' });
});

module.exports = router;
