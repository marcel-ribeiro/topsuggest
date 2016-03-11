/**
 * @ngdoc
 * @name topsuggest..dimensions.factory.js
 * @description "description of the component in markdown"
 */
'use strict';

angular.module('app.components.shared.dimensions.factory', [])

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