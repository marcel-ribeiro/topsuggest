/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire-read.controller
 * @description "Controller responsible for reading and providing the questions related to one specific category"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire-read.controller', ['app.components.sections.expert-questionnaire.display-question.controller'])

  .controller('ExpertQuestionnaireReadController', ExpertQuestionnaireReadController);


function ExpertQuestionnaireReadController(CategoryResourceFactory, $stateParams, $scope) {
  var _this = this;
  _this.isStepsLoaded = false;
  _this.steps = [];
  CategoryResourceFactory.get({id: $stateParams.id}).$promise.then(function (result) {
    _this.category = result;
    setSteps(result);
  });

  function setSteps(result) {
    angular.forEach(result.questions, function (question) {
      var step = {
        templateUrl: 'components/sections/expert-questionnaire/display-question.view.html',
        title: question.id,
        controller: 'displayQuestionController',
        controllerAs: 'displayQuestionController',
        hasForm: true,
        isolatedScope: true,
        locals: {
          question: question
        }
      };
      _this.steps.push(step);
    });
    _this.isStepsLoaded = true;
  }
}