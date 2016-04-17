/**
 * @ngdoc
 * @name app.components.sections.product-questionnaire-read.controller
 * @description "description of the component in markdown"
 */
'use strict';

angular.module('app.components.sections.product-questionnaire-read.controller', [])

  .controller('ProductQuestionnaireReadController', ProductQuestionnaireReadController);

function ProductQuestionnaireReadController(ProductsResourceFactory, $stateParams) {
  var self = this;
  self.product = ProductsResourceFactory.get({id: $stateParams.id});
}