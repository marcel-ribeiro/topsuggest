'use strict';
angular.module('shared.layout.header', [])

  .directive('headerDirective', function () {
    var headerDirective = {
      restrict: 'A',
      replace: true,
      templateUrl: 'views/header.html'
    };
    return headerDirective;
  });