/**
 * @ngdoc
 * @deprecated
 * @name topsuggest..device-type.factory
 * @description "description of the component in markdown"
 */
'use strict';
angular.module('app.components.shared.device-type.factory', [])

  .factory('DimensionsFactory', ['$window',
    function ($window) {
      return {
        height: function () {
          return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        },
        width: function () {
          return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
      };
    }
  ]);