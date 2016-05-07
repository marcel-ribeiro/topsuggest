/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-sort.controller
 * @description "This directive is responsible for displaying in the UI the questions of type SORT"
 */
'use strict';

angular.module('app.components.shared.progress-multistep.controller', [])

  .controller('progressMultistepController', ProgressMultistepController);

function ProgressMultistepController($timeout, $attrs, $scope) {
  var _this = this;

  console.info("Controller $attrs.numberOfSteps=" + $attrs.numberOfSteps);
  console.info("Controller $attrs.currentStep=" + $attrs.currentStep);
  console.info("Controller $scope.numberOfSteps=" + $scope.numberOfSteps);
  console.info("Controller $scope.currentStep=" + $scope.currentStep);

  _this.totalNumberOfSteps = 1;
  console.info("Controller _this.totalNumberOfSteps=" + _this.totalNumberOfSteps);

  _this.progressSteps = [];

  for (var i = 1; i <= $attrs.numberOfSteps; i++) {
    var progressStep = new ProgressStep();
    progressStep.title = "Step " + i + " out of " + _this.totalNumberOfSteps;
    progressStep.number = i;
    _this.progressSteps.push(progressStep);
  }

}

function ProgressStep() {
  return function ProgressStep() {
    this.title = '';
    this.number = 0;
  }
}