/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-single-choice.controller
 * @description "This directive is responsible for displaying in the UI the questions of type single-choice"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-single-choice.controller', [])

  .controller('displayQuestionSingleChoiceController', DisplayQuestionSingleChoiceController);

function DisplayQuestionSingleChoiceController(question, multiStepFormInstance) {
  var vm = this;
  vm.question = question;
  _setInitialValidity();

  function _setInitialValidity() {
    var activeStepIndex = multiStepFormInstance.getActiveIndex();
    multiStepFormInstance.setValidity(true, activeStepIndex);
    return true;
  }

}