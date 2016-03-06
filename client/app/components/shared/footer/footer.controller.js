'use strict';

/**
 * @ngdoc function
 * @name components.shared.footer.controller
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('components.shared.footer.controller', [])

  .controller('footerController', ['$scope', function ($scope) {
    $scope.company = {
      name: 'Old Panda'
    };
    $scope.year = '2016';
  }]);