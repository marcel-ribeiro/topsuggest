/**
 * @ngdoc
 * @name app.components.shared.products.products-resource.factory
 * @description "Factory responsible for providing the $resource object to access the product rest API"
 */
'use strict';

angular.module('app.components.shared.products.products-resource.factory', [])


  .factory('ProductsResourceFactory', ProductsResourceFactory);

function ProductsResourceFactory($resource) {
  return $resource('/products/:id', {id: '@id'});
}
