/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-single-choice.controller
 * @description "This directive is responsible for displaying in the UI the questions of type single-choice"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-single-choice.controller', [])

  .controller('displayQuestionSingleChoiceController', DisplayQuestionSingleChoiceController);

function DisplayQuestionSingleChoiceController(question, multiStepFormInstance, $timeout) {
  var vm = this;
  vm.question = question;
  $timeout(function () {
    _initAnswerState();
    _setValidity(false);
  }, 50);


  vm.validate = function () {
    if (vm.question.answer) {
      _setValidity(true);
      return true;
    }
    _setValidity(false);
    return false;
  };

  function _setValidity(isValid) {
    var activeStepIndex = multiStepFormInstance.getActiveIndex();
    multiStepFormInstance.setValidity(isValid, activeStepIndex);
    return true;
  }

  function _initAnswerState() {
    vm.question.answer = null;
  }

}