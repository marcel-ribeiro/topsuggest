/**
 * @ngdoc
 * @name topsuggest..navbar.controller
 * @description "description of the component in markdown"
 */
'use strict';
angular.module('clientApp')
  .controller('MainController', MainController);

function MainController($scope, $log) {
  var vm = this;
  vm.title = 'MainController Title';
  vm.transparency = true;
  vm.navbarGap = true;
  vm.scrollpointOffset = 680;
}