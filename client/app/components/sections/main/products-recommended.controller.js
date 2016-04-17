/**
 * @ngdoc
 * @name app.components.shared.products.products-recommended.controller.js
 * @description "This controller returns the list of products to be displayed in the recommended section at the main page"
 */
'use strict';

angular.module('app.components.sections.main.products-recommended.controller', [])

  .controller('ProductsRecommendedController', ProductsRecommendedController);

function ProductsRecommendedController(ProductsResourceFactory) {
  var self = this;

  self.products = ProductsResourceFactory.query();

  self.view = function (id) {
    console.log('id to be view', id);
    ProductsResourceFactory.get({id: id});
  };
}