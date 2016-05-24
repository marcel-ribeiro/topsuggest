/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-multiple-choice.directive
 * @description "This directive is responsible for displaying in the UI the questions of type multiple-choice"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-multiple-choice.directive', [
  'app.components.sections.expert-questionnaire.display-question-multiple-choice.controller'
])

  .directive('displayQuestionMultipleChoiceDirective', DisplayQuestionMultipleChoiceDirective);

function DisplayQuestionMultipleChoiceDirective() {
  return {
    restrict: 'AE',
    replace: true,
    controller: 'displayQuestionMultipleChoiceController',
    controllerAs: 'displayQuestionMultipleChoiceController',
    bindToController: {
      question: '=question'
    },
    templateUrl: 'components/sections/expert-questionnaire/display-question-multiple-choice/display-question-multiple-choice.view.html'
  };
}