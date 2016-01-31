'use strict';
angular.module('footer.directive', [])

  .directive('footer', function () {
    var footerDirective = {
      restrict: 'A',
      replace: true,
      templateUrl: 'views/footer.html'
    };
    return footerDirective;
  });