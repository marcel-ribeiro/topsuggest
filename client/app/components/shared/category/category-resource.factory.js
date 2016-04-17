/**
 * @ngdoc
 * @name app.components.shared.category-resource.factory
 * @description "Factory responsible for providing the $resource object to access the category rest API"
 */
'use strict';

angular.module('app.components.shared.category-resource.factory', [])


  .factory('CategoryResourceFactory', CategoryResourceFactory);

function CategoryResourceFactory($resource) {
  return $resource('/category/:id', {id: '@id'});
}
