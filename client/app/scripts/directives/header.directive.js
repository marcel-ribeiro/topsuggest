'use strict';
angular.module('header.directive', [])

  .directive('header', function () {
    var footerDirective = {
      restrict: 'A',
      replace: true,
      templateUrl: 'views/header.html'
    };
    return footerDirective;
  });