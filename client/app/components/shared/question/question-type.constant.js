/**
 * @ngdoc
 * @name app.shared.question.question-type.constant
 * @description Enum of possible types of questions
 */
'use strict';
angular.module('app.shared.question.question-type.constant', [])
  .constant('displayQuestionType', DisplayQuestionType);

function DisplayQuestionType() {
  var DisplayQuestionType = [
    {id: 1, type: 'SORT', name: 'Sort (drag-and-drop)'},
    {id: 2, type: 'UNIQUE_CHOICE', name: 'Unique choice (checkbox)'},
    {id: 3, type: 'MULTIPLE_CHOICE', name: 'Multiple choice (radio button)'}
  ];
  return DisplayQuestionType;
}