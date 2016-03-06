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
angular.module('components.shared.animated-dropdown.directive', [])


  .directive('opAnimatedDropdown', function () {
    // Custom function to read dropdown data
    function dropdownEffectData(target) {
      // @todo - page level global?
      var effectInDefault = null,
        effectOutDefault = null;
      var dropdown = $(target),
        dropdownMenu = $('.dropdown-menu', target);
      var parentUl = dropdown.parents('ul.nav');

      // If parent is ul.nav allow global effect settings
      if (parentUl.size() > 0) {
        effectInDefault = parentUl.data('dropdown-in') || null;
        effectOutDefault = parentUl.data('dropdown-out') || null;
      }

      return {
        target: target,
        dropdown: dropdown,
        dropdownMenu: dropdownMenu,
        effectIn: dropdownMenu.data('dropdown-in') || effectInDefault,
        effectOut: dropdownMenu.data('dropdown-out') || effectOutDefault,
      };
    }

    // Custom function to start effect (in or out)
    function dropdownEffectStart(data, effectToStart) {
      if (effectToStart) {
        data.dropdown.addClass('dropdown-animating');
        data.dropdownMenu.addClass('animated');
        data.dropdownMenu.addClass(effectToStart);
      }
    }

    // Custom function to read when animation is over
    function dropdownEffectEnd(data, callbackFunc) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      data.dropdown.one(animationEnd, function () {
        data.dropdown.removeClass('dropdown-animating');
        data.dropdownMenu.removeClass('animated');
        data.dropdownMenu.removeClass(data.effectIn);
        data.dropdownMenu.removeClass(data.effectOut);

        // Custom callback option, used to remove open class in out effect
        if (typeof callbackFunc == 'function') {
          callbackFunc();
        }
      });
    }

    return {
      restrict: 'AE',
      link: function postLink(scope, elem, attrs) {
        elem.on({
          "show.bs.dropdown": function () {
            // On show, start in effect
            var dropdown = dropdownEffectData(this);
            dropdownEffectStart(dropdown, dropdown.effectIn);
          },
          "shown.bs.dropdown": function () {
            // On shown, remove in effect once complete
            var dropdown = dropdownEffectData(this);
            if (dropdown.effectIn && dropdown.effectOut) {
              dropdownEffectEnd(dropdown, function () {
              });
            }
          },
          "hide.bs.dropdown": function (e) {
            // On hide, start out effect
            var dropdown = dropdownEffectData(this);
            if (dropdown.effectOut) {
              e.preventDefault();
              dropdownEffectStart(dropdown, dropdown.effectOut);
              dropdownEffectEnd(dropdown, function () {
                dropdown.dropdown.removeClass('open');
              });
            }
          }
        });
      }
    };
  });
