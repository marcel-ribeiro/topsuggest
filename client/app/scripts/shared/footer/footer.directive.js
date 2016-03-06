'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('directives.layout.footer', ['controllers.layout.footer'])

  .directive('footerDirective', function () {
    var footerDirective = {
      restrict: 'A',
      scope: true,
      replace: true,
      controller: 'footerController',
      templateUrl: 'scripts/shared/footer/footer.view.html'
    };


    return footerDirective;
  });