/**
 * @ngdoc
 * @name topsuggest..display-question.controller.js
 * @description "This controller is responsible propagate the question to be displayed to the view"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire.display-question.controller', [])

  .controller('displayQuestionController', DisplayQuestionController);

function DisplayQuestionController(question) {
  var _this = this;
  _this.question = question;
}