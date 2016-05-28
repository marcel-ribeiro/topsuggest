/**
 * @ngdoc
 * @name app.components.sections.expert-questionnaire-read.controller
 * @description "Controller responsible for reading and providing the questions related to one specific category"
 */
'use strict';

angular.module('app.components.sections.expert-questionnaire-read.controller', [])

  .controller('ExpertQuestionnaireReadController', ExpertQuestionnaireReadController);


function ExpertQuestionnaireReadController(CategoryResourceFactory, $stateParams, $http) {
  var _this = this;
  _this.isStepsLoaded = false;
  _this.steps = [];
  CategoryResourceFactory.get({id: $stateParams.id}).$promise.then(function (result) {
    _this.category = result;
    setSteps(result);
  });


  _this.finish = function () {
    alert('Finish has been called. You are going to be redirected home!');
    // var questionsAnswered = {
    //   name : "Marcel",
    //   id: 1
    //
    // };
    // var res = $http.post('/display-suggestion', questionsAnswered);
    //
    // res.success(function(data, status, headers, config) {
    //   _this.questionsAnswered = data;
    // });
    //
    // res.error(function(data, status, headers, config) {
    //   alert( "failure message: " + JSON.stringify({data: data}));
    // });

    // $location.path('/home');
  };

  function setSteps(result) {
    angular.forEach(result.questions, function (question) {

      var templateUrl = "";
      var controllerName = "";
      switch (question.type) {
        case "SORT":
          templateUrl = 'components/sections/expert-questionnaire/display-question-sort/display-question-sort.view.html';
          controllerName = 'displayQuestionSortController';
          break;
        case "MULTIPLE_CHOICE":
          templateUrl = 'components/sections/expert-questionnaire/display-question-multiple-choice/display-question-multiple-choice.view.html';
          controllerName = 'displayQuestionMultipleChoiceController';
          break;
        case "SINGLE_CHOICE":
          templateUrl = 'components/sections/expert-questionnaire/display-question-single-choice/display-question-single-choice.view.html';
          controllerName = 'displayQuestionSingleChoiceController';
          break;

      }

      var step = {
        templateUrl: templateUrl,
        title: question.id,
        controller: controllerName,
        controllerAs: 'displayQuestionController',
        hasForm: true,
        isolatedScope: true,
        locals: {
          question: question
        }
      };
      _this.steps.push(step);

    });
    _this.isStepsLoaded = true;
  }
}