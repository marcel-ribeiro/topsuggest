'use strict';

/**
 * @ngdoc function
 * @name components.shared.header.directive
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
      templateUrl: 'components/shared/header/header.view.html'
    };
    return headerDirective;
  });