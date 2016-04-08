'use strict';

/**
 * @ngdoc function
 * @name app.components.shared.footer.controller
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('app.components.shared.footer.controller', ['app.components.shared.footer.constants'])

  .controller('FooterController', FooterController);


function FooterController(COMPANY_INFO, YEAR) {
  var vm = this;

  vm.company = {
    name: 'Old Panda',
    website: 'domain.com'
  };
  vm.year = '2016';
}

