/**
 * @ngdoc
 * @name topsuggest..navbar.controller
 * @description "description of the component in markdown"
 */
'use strict';
angular.module('app.components.sections.main.controller', [])
  .controller('MainController', MainController);

function MainController($scope, $log) {
  var vm = this;
  vm.title = 'MainController Title';
  vm.transparency = true;
  vm.navbarGap = true;
  vm.scrollpointOffset = 680;
}