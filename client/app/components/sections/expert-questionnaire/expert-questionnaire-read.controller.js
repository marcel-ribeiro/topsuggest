/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire-read.controller
 * @description "Controller responsible for reading and providing the questions related to one specific category"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire-read.controller', [])

  .controller('ExpertQuestionnaireReadController', ExpertQuestionnaireReadController);


function ExpertQuestionnaireReadController(CategoryResourceFactory, $stateParams) {
  var self = this;
  self.category = CategoryResourceFactory.get({id: $stateParams.id});
}

