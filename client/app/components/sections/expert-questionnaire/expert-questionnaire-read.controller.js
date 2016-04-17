/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire-read.controller
 * @description "description of the component in markdown"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire-read.controller', [])

  .controller('ExpertQuestionnaireReadController', ExpertQuestionnaireReadController);

function ExpertQuestionnaireReadController(CategoryResourceFactory, $stateParams) {
  var self = this;
  self.category = CategoryResourceFactory.get({id: $stateParams.id});
}