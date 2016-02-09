'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('controllers.layout.footer', [])

  .controller('footerController', ['$scope', function ($scope) {
    $scope.company = {
      name: 'Old Panda'
    };
    $scope.year = '2016';
  }]);