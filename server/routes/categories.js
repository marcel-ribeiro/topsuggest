var express = require('express');
var router = express.Router();

var categories = require("../resources/categories.json");


/* GET categories listing. */
router.get('/', function (req, res, next) {
  res.send(categories);
});

/* GET one category by id. */
router.get('/:id', function (req, res, next) {
  var category = {};
  var id = req.params.id;

  var list = categories.filter(function (element) {
    return element.id == id;
  });

  if (list.length !== 0) {
    category = list[0];
  }

  res.send(category);
});


module.exports = router;