'use strict';

/**
 * @ngdoc function
 * @name app.components.shared.footer.directive
 * @description
 * Controller of the footer
 */
angular.module('app.components.shared.footer.directive', [
  'app.components.shared.footer.controller'
])

  .directive('footerDirective', function () {
    var footerDirective = {
      restrict: 'A',
      scope: true,
      replace: true,
      controller: 'FooterController',
      controllerAs: 'footer',
      templateUrl: 'components/shared/footer/footer.view.html'
    };


    return footerDirective;
  });