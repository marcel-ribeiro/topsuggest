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

function ProgressMultistepDirective($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    controller: 'progressMultistepController',
    controllerAs: 'progressMultistepController',
    bindToController: {
      numberOfSteps: '@'
      //   currentStep: '@'
    },
    templateUrl: 'components/shared/progress-multistep/progress-multistep.view.html',
    link: linkFunction,
    scope: {
      numberOfSteps: '@',
      currentStep: '@',
      // multiStepFormInstance: '='
    },
    // compile: compilingDirective
  };


  function linkFunction(scope, element, attrs) {
    console.info("scope.numberOfSteps = " + scope.numberOfSteps);
    console.info("scope.currentStep = " + scope.currentStep);
    // console.info("scope.multiStepFormInstance = " + scope. multiStepFormInstance.getActiveIndex());


    $timeout(function () {
      var multistepStep = $('.multistep-step');
      console.info("multistepStep = " + multistepStep);

      // var stepWidth = Math.floor(100 / attrs.numberOfSteps);
      var stepWidth = Math.floor(100 / 4);
      multistepStep.css("width", stepWidth + "%");
    });
  }

  function compilingDirective(element, attributes) {
    console.log("simple compile", arguments);
    return {
      //   pre: function (scope, element, attributes, controller, transcludeFn) {
      //     console.log("simple pre", arguments);
      //
      //     $timeout(function () {
      //       scope.$apply(function () {
      //         var currentStep = scope.$eval(attributes.currentStep);
      //         console.info("currentStep = " + currentStep);
      //
      //         var numberOfSteps = scope.$eval(attributes.numberOfSteps);
      //         console.info("numberOfSteps = " + numberOfSteps);
      //       });
      //     });
      //
      //   },
      //   post: function (scope, element, attributes, controller, transcludeFn) {
      //     console.log("simple post", arguments);
      //   }
    }
  }

}