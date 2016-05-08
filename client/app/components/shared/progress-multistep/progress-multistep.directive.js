/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-sort.directive
 * @description "This directive is responsible for displaying in the UI the questions of type SORT"
 */
'use strict';

angular.module('app.components.shared.progress-multistep.directive', [
    'app.components.shared.progress-multistep.controller'
  ])

  .directive('progressMultistepDirective', ProgressMultistepDirective);

function ProgressMultistepDirective() {
  return {
    restrict: 'AE',
    replace: true,
    controller: 'progressMultistepController',
    controllerAs: 'progressMultistepController',
    bindToController: {
      numberOfSteps: '@',
      currentStep: '@'
    },
    templateUrl: 'components/shared/progress-multistep/progress-multistep.view.html',
    link: linkFunction,
    scope: true
  };


  function linkFunction(scope, element, attrs) {
    scope.$watch(
      "progressMultistepController.numberOfSteps",
      function handleNumberOfStepsChange(newValue, oldValue) {
        // console.log("Updating steps sue to change on number of steps. From: %s To: %s", oldValue, newValue);
        var multistepStep = $('.multistep-step');
        var stepWidth = Math.floor(100 / newValue);
        multistepStep.css("width", stepWidth + "%");
      }
    );

  }
}