/**
 * @ngdoc
 * @name app.components.sections.main.main-recommended.controller
 * @description "This controller returns the list of categories to be displayed in the recommended section at the main page"
 */
'use strict';

angular.module('app.components.sections.main.main-recommended.controller', [])

  .controller('MainRecommendedController', MainRecommendedController);

function MainRecommendedController(CategoryResourceFactory) {
  var self = this;

  self.categories = CategoryResourceFactory.query();
}