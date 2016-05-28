var express = require('express');
var router = express.Router();

var products = require("../resources/products-category-01.json");


/* GET products listing. */
router.get('/', function (req, res, next) {
  res.send(products);
});

/* GET one product by id. */
router.get('/:id', function (req, res, next) {
  var product = {};
  var id = req.params.id;

  var list = products.filter(function (element) {
    return element.id == id;
  });

  if (list.length !== 0) {
    product = list[0];
  }

  res.send(product);
});

/* GET one suggestion of a product based on answers. */
router.post('/', function (req, res, next) {
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("User name = " + user_name + ", password is " + password);


  console.log("Params:[%s]", JSON.stringify(req.body));
  var suggestions = [];

  for (var indexSuggestion = 0; indexSuggestion < 4; indexSuggestion++) {
    var randomIdSugestion = getRandomInt(0, products.length);
    suggestions.push(randomIdSugestion);
    console.log("Suggestion[%s] = [%s]", indexSuggestion, randomIdSugestion);
  }

  var list = products.filter(function (element) {
    return suggestions.contains(element.id);
  });

  res.send(list);
});

function getRandomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
Array.prototype.contains = function (element) {
  return this.indexOf(element) > -1;
};


module.exports = router;
