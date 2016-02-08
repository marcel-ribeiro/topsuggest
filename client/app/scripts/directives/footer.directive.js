'use strict';
angular.module('shared.layout.footer', [])

  .directive('footerDirective', function () {
    var footerDirective = {
      restrict: 'A',
      replace: true,
      templateUrl: 'views/footer.html'
    };
    return footerDirective;
  });