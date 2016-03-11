'use strict';

/**
 * @ngdoc Directive op-dropdown
 * @name opDropdown
 * @description
 * # Directive that adds animations to dropdown and dropup (usage add op-dropdown)
 * usage: combine the op-dropdown (attribute or element) with the attributes data-dropdown-in="flipInX" data-dropdown-out="flipOutX"
 *
 *
 */
angular.module('app.components.shared.animated-menu.directive', ['app.components.shared.dimensions.api'])


  .directive('opAnimatedMenu', function ($window, $timeout, DimensionsFactory, MENU_COLLAPSING_WIDTH) {

    return {
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        element.on('click', 'a', function () {
          displayMenu(element, true);
        });

        // On window resize...
        angular.element($window).on('resize', function (e) {
          resizeAction(e);
        });


        function resizeAction(e) {
          // Reset timeout
          $timeout.cancel(scope.resizingTimer);

          // Add a timeout to not call the resizingTimer function every pixel
          var delayTime = 300; //Broadcast 300ms after the last resize to avoid flood
          scope.resizingTimer = $timeout(function () {
            var width = DimensionsFactory.width();
            if (width >= MENU_COLLAPSING_WIDTH) {
              displayMenu(element, false);
              return false;
            }

          }, delayTime);
        }

        function displayMenu(element, isCollapsed) {
          if ($(element).children('ul').length) {
            if (isCollapsed) {
              $(element).children('ul').slideToggle('fast');
            } else {
              $(element).children('ul').show('fast');
            }
            return false;
          }
          if ($(element).children('div').length) {
            if (isCollapsed) {
              $(element).children('div').slideToggle('fast');
            } else {
              $(element).children('div').show('fast');
            }
            return false;
          }
        }
      }
    };
  });

