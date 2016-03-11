'use strict';

/**
 * @ngdoc function
 * @name app.components.shared.header.directive
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('app.components.shared.header.directive', ['app.components.shared.header.controller'])

  .directive('headerDirective', function () {
    var headerDirective = {
      restrict: 'A',
      replace: true,
      controller: 'HeaderController',
      controllerAs: 'header',
      templateUrl: 'components/shared/header/header.view.html'
    };
    return headerDirective;
  });