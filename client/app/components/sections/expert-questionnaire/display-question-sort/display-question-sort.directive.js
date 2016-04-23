/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-sort.directive
 * @description "This directive is responsible for displaying in the UI the questions of type SORT"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-sort.directive', [
  'app.components.sections.expert-questionnaire.display-question-sort.controller'
])

  .directive('displayQuestionSortDirective', DisplayQuestionSortDirective);

function DisplayQuestionSortDirective() {
  return {
    restrict: 'AE',
    replace: true,
    controller: 'displayQuestionSortController',
    controllerAs: 'displayQuestionSortController',
    bindToController: {
      question: '=question'
    },
    templateUrl: 'components/sections/expert-questionnaire/display-question-sort/display-question-sort.view.html'
  };
}