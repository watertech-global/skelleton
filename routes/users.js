//Watertech Routes
//Users Routes
var express = require('express');
var router = express.Router();

const mongoos = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
