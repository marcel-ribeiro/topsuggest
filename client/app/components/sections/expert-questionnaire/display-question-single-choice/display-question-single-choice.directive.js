/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-single-choice.directive
 * @description "This directive is responsible for displaying in the UI the questions of type single-choice"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-single-choice.directive', [
  'app.components.sections.expert-questionnaire.display-question-single-choice.controller'
])

  .directive('displayQuestionSingleChoiceDirective', DisplayQuestionSingleChoiceDirective);

function DisplayQuestionSingleChoiceDirective() {
  return {
    restrict: 'AE',
    replace: true,
    controller: 'displayQuestionSingleChoiceController',
    controllerAs: 'displayQuestionSingleChoiceController',
    bindToController: {
      question: '=question'
    },
    templateUrl: 'components/sections/expert-questionnaire/display-question-single-choice/display-question-single-choice.view.html'
  };
}