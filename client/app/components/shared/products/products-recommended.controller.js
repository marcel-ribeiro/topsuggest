/**
 * @ngdoc
 * @name topsuggest..products-recommended.controller.js
 * @description "description of the component in markdown"
 */
'use strict';

angular.module('app.components.shared.products.products-recommended.controller', [])

  .controller('ProductsRecommendedController', ProductsRecommendedController);

function ProductsRecommendedController() {
  var vm = this;
  vm.products = [
    {
      "id": "01",
      "name": "Smartphones",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/main-slideshow-lonely-planet.jpg"
    },
    {
      "id": "02",
      "name": "Laptops",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/main-slideshow-lonely-planet2.jpg"
    },
    {
      "id": "3",
      "name": "TVs",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/main-slideshow-lonely-planet3.jpg"
    }
  ];

}