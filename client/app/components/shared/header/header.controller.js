'use strict';

/**
 * @ngdoc function
 * @name controllers.layout.header:headerController
 * @description
 * # headerController
 * Controller of the header
 */
angular.module('app.components.shared.header.controller', [])


  .controller('headerController', ['$scope', '$state', function ($scope, $state) {
    $scope.app = {
      state: $state
    };
  }]);