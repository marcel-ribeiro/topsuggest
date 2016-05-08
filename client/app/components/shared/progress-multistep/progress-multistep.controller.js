/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-sort.controller
 * @description "This directive is responsible for displaying in the UI the questions of type SORT"
 */
'use strict';

angular.module('app.components.shared.progress-multistep.controller', [])

  .controller('progressMultistepController', ProgressMultistepController);

function ProgressMultistepController($scope) {
  var _this = this;


  $scope.$watch(
    "progressMultistepController.currentStep",
    function handleCurrentStepChange(newValue, oldValue) {
      // console.log( "Recalculating steps sue to change on current step . From: %s To: %s", oldValue, newValue);
      _this.progressSteps = createProgressSteps(_this.numberOfSteps, _this.currentStep, _this.progressSteps);
    }
  );

  $scope.$watch(
    "progressMultistepController.numberOfSteps",
    function handleNumberOfStepsChange(newValue, oldValue) {
      // console.log( "Recalculating steps sue to change on number of steps. From: %s To: %s", oldValue, newValue);
      _this.progressSteps = createProgressSteps(_this.numberOfSteps, _this.currentStep, _this.progressSteps);
    }
  );

}

function createProgressSteps(numberOfSteps, currentStep, existingprogressSteps) {
  var progressSteps = [];
  currentStep = parseInt(currentStep);
  
  for (var i = 1; i <= numberOfSteps; i++) {
    var progressStep = getProgressStep(i, existingprogressSteps);

    progressStep.title = "Step " + i + " out of " + numberOfSteps;
    progressStep.number = i;
    progressStep.isComplete = i < currentStep;
    progressStep.isCurrent = i == currentStep;
    progressStep.isNext = i == currentStep + 1;
    progressSteps.push(progressStep);
  }
  return progressSteps;
}

function getProgressStep(stepNumber, existingprogressSteps) {
  var existingProgressStep;
  var progressStep;
  if (existingprogressSteps && existingprogressSteps.length >= stepNumber) {
    existingProgressStep = existingprogressSteps[stepNumber - 1];

    if (existingProgressStep && existingProgressStep.number && existingProgressStep.number == stepNumber) {
      progressStep = existingProgressStep;
    } else {
      progressStep = new ProgressStep();
    }
  } else {
    progressStep = new ProgressStep();
  }
  return progressStep;
}

function ProgressStep() {
  return function ProgressStep() {
    this.title = '';
    this.number = 0;
  }
}