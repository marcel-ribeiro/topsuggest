/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-multiple-choice.controller
 * @description "This directive is responsible for displaying in the UI the questions of type multiple-choice"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-multiple-choice.controller', [])

  .controller('displayQuestionMultipleChoiceController', DisplayQuestionMultipleChoiceController);

function DisplayQuestionMultipleChoiceController($timeout) {
  var vm = this;
  _initChoicesState();

  vm.validate = function (e) {
    alert(vm.question);
    // alert("Event: " + e + "PREFIX_CHECKBOX_NAME= " + PREFIX_CHECKBOX_NAME+vm.question.id);

    for (var choiceIndex = 0; choiceIndex < vm.question.choices.length; choiceIndex++) {
      var choice = vm.question.choices[choiceIndex];
      console.info("choice=" + choice.id + " isChecked=" + choice.isChecked);


      if (choice.isChecked) {
        alert("Form is validated");
        return true;
      }
    }
    alert("Not valid yet!");
    return false;
  };

  // // vm.isValid = function(){
  // //   return true;
  // // };
  //
  //
  // vm.setValidity = function (isValid, stepIndex) {
  //   var step = this.steps[(stepIndex || this.activeIndex) - 1];
  //   if (step) {
  //     step.valid = isValid;
  //   }
  // };


  function _initChoicesState() {
    for (var choiceIndex = 0; choiceIndex < vm.question.choices.length; choiceIndex++) {
      var choice = vm.question.choices[choiceIndex];
      choice.isChecked = false;
      console.info("Setting choice=" + choice.id + " isChecked=" + choice.isChecked);
    }
  }

}