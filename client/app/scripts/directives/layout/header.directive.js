'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('directives.layout.header', [])

  .directive('headerDirective', function () {
    var headerDirective = {
      restrict: 'A',
      replace: true,
      templateUrl: 'views/directives/header.html'
    };
    return headerDirective;
  });