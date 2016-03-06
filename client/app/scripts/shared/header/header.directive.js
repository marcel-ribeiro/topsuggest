'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('components.shared.header.directive', ['components.shared.header.controller'])

  .directive('headerDirective', function () {
    var headerDirective = {
      restrict: 'A',
      replace: true,
      controller: 'headerController',
      templateUrl: 'scripts/shared/header/header.view.html'
    };
    return headerDirective;
  });