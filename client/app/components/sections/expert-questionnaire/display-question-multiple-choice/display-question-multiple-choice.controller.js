/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-multiple-choice.controller
 * @description "This directive is responsible for displaying in the UI the questions of type multiple-choice"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-multiple-choice.controller', [])

  .controller('displayQuestionMultipleChoiceController', DisplayQuestionMultipleChoiceController);

function DisplayQuestionMultipleChoiceController(question, multiStepFormInstance, $timeout) {
  var vm = this;
  vm.question = question;

  $timeout(function () {
    _initChoicesState();
    _setValidity(false);
  }, 50);


  vm.validate = function () {
    for (var choiceIndex = 0; choiceIndex < vm.question.choices.length; choiceIndex++) {
      var choice = vm.question.choices[choiceIndex];
      if (choice.isChecked) {
        _setValidity(true);
        return true;
      }
    }
    _setValidity(false);
    return false;
  };

  function _setValidity(isValid) {
    var activeStepIndex = multiStepFormInstance.getActiveIndex();
    multiStepFormInstance.setValidity(isValid, activeStepIndex);
    return true;
  }


  function _initChoicesState() {
    for (var choiceIndex = 0; choiceIndex < vm.question.choices.length; choiceIndex++) {
      var choice = vm.question.choices[choiceIndex];
      choice.isChecked = false;
      console.info("Setting choice=" + choice.id + " isChecked=" + choice.isChecked);
    }
  }

}