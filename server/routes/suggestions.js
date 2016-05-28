var express = require('express');
var router = express.Router();

var products = require("../resources/products-category-01.json");


/* GET categories listing. */
router.get('/', function (req, res, next) {
  res.send(data);
});

/* GET one category by id. */
router.get('/:id', function (req, res, next) {
  var category = {};
  var id = req.params.id;

  var list = data.filter(function (element) {
    return element.id == id;
  });

  if (list.length !== 0) {
    category = list[0];
  }

  res.send(category);
});


module.exports = router;
