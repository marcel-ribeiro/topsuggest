'use strict';

/**
 * @ngdoc function
 * @name components.shared.footer.directive
 * @description
 * Controller of the footer
 */
angular.module('components.shared.footer.directive', [
  'components.shared.footer.controller'
])

  .directive('footerDirective', function () {
    var footerDirective = {
      restrict: 'A',
      scope: true,
      replace: true,
      controller: 'footerController',
      templateUrl: 'components/shared/footer/footer.view.html'
    };


    return footerDirective;
  });