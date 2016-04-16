/**
 * @ngdoc
 * @name app.components.shared.products.products-recommended.controller.js
 * @description "This controller returns the list of products to be displayed in the recommended section at the main page"
 */
'use strict';

angular.module('app.components.shared.products.products-recommended.controller', [])

  .controller('ProductsRecommendedController', ProductsRecommendedController);

function ProductsRecommendedController() {
  var vm = this;
  vm.products = [
    {
      "id": "01",
      "name": "PRODUCTS.SMARTPHONES.NAME",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/product01.png"
    },
    {
      "id": "02",
      "name": "PRODUCTS.LAPTOPS.NAME",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/product02.png"
    },
    {
      "id": "3",
      "name": "PRODUCTS.TELEVISIONS.NAME",
      "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      "image": "images/product03.png"
    }
  ];

}