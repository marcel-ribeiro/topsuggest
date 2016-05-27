/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire.display-question-sort.controller
 * @description "This directive is responsible for displaying in the UI the questions of type SORT"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question-sort.controller', [])

  .controller('displayQuestionSortController', DisplayQuestionSortController);

function DisplayQuestionSortController(question, multiStepFormInstance, $timeout) {
  var vm = this;
  vm.question = question;

  _setInitialValidity();

  vm.beforeReorder = function (e, itemIndex) {
    if (/no-reorder/.test(e.target.className)) {
      e.preventDefault();
    }
  };

  vm.beforeSwipe = function (e, itemIndex) {
    if (/no-swipe/.test(e.target.className)) {
      e.preventDefault();
    }
  };

  vm.beforeWait = function (e, itemIndex) {
    if (e.target.className.indexOf('instant') > -1) {
      e.preventDefault();
    }

  };

  vm.afterSwipe = function (e, itemIndex) {
    vm.question.choices.splice(itemIndex, 1);
  };

  vm.reorder = function (e, spliceIndex, originalIndex) {

    $timeout(function () {
      var listItem = vm.question.choices[originalIndex];
      vm.question.choices.splice(originalIndex, 1);
      vm.question.choices.splice(spliceIndex, 0, listItem);
    }, 50);

    return true;
  };

  function _setInitialValidity() {
    var activeStepIndex = multiStepFormInstance.getActiveIndex();
    multiStepFormInstance.setValidity(true, activeStepIndex);
    return true;
  }

}