'use strict';

/**
 * @ngdoc function
 * @name controllers.layout.header:headerController
 * @description
 * # headerController
 * Controller of the header
 */
angular.module('app.components.shared.header.controller', [])


  .controller('HeaderController', HeaderController);

function HeaderController($scope, $log, $location) {
  var vm = this;
  vm.getSubMenus = function (numberOfItems, nameOfItems) {
    var subItems = [];
    for (var i = 1; i <= numberOfItems; i++) {
      subItems.push(nameOfItems + " - " + i);
    }
    return subItems;
  };
}