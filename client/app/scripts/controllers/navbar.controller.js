/**
 * @ngdoc
 * @name topsuggest..navbar.controller.js
 * @description "description of the component in markdown"
 */
'use strict';
angular.module('clientApp')
  .controller('NavbarController', NavbarController);


function NavbarController($scope, $rootScope, $log, $route, $routeParams, $location) {
  var vm = this;

  $scope.$on('$locationChangeSuccess', function (event) {
    $log.info('location reloaded. new location: %s', $location.path());
    vm.properties = getNavbarParameters($location.path(), vm, $log);
    //setNavbarParameters($location.path(), vm, $log);
    $log.info('relead mv.properties = %s', toString(vm.properties, "vm.properties"));
  });

  vm.properties = getNavbarParameters($location.path(), vm, $log);
  //setNavbarParameters($location.path(), vm, $log);
  $log.info('relead mv.properties = %s', toString(vm.properties, "vm.properties"));
}


function setNavbarParameters(path, vm, $log) {

  var locationsWithTransparentNavbar = ['/main'];

  if (contains(locationsWithTransparentNavbar, path, $log)) {
    $log.info('Yes, the array contains the current location');
    vm.title = 'Transparent Navbar';
    vm.transparency = true;
    vm.navbarGap = true;
    vm.scrollpointOffset = true;
  } else {
    vm.title = 'Dark bar';
    vm.transparency = false;
    vm.navbarGap = false;
    vm.scrollpointOffset = false;
  }
}
function getNavbarParameters(path, vm, $log) {

  var locationsWithTransparentNavbar = ['/main'];
  var testNavbarProps = new NavbarProps();
  testNavbarProps.logA();

  if (contains(locationsWithTransparentNavbar, path, $log)) {
    $log.info('Yes, the array contains the current location');
    testNavbarProps.title = 'Transparent Navbar';
    testNavbarProps.transparency = true;
    testNavbarProps.navbarGap = true;
    testNavbarProps.scrollpointOffset = true;
  } else {
    testNavbarProps.title = 'Dark bar';
    testNavbarProps.transparency = false;
    testNavbarProps.navbarGap = false;
    testNavbarProps.scrollpointOffset = false;
  }

  return testNavbarProps;
}

//function getNavbarParameters(path, vm, $log) {
//
//  var locationsWithTransparentNavbar = ['/main'];
//  var navbar = new Object();
//
//  if (contains(locationsWithTransparentNavbar, path, $log)) {
//    $log.info('Yes, the array contains the current location');
//    return {
//      title: 'Transparent Navbar',
//      transparency: true,
//      navbarGap: true,
//      scrollpointOffset: true
//    };
//  } else {
//    return {
//      title: 'Dark bar',
//      transparency: false,
//      navbarGap: false,
//      scrollpointOffset: false
//    };
//  }
//}

function contains(array, object) {
  for (var i in array) {
    if (array[i] == object) {
      return true;
    }
  }

  return false;

}

function toString(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}


var NavbarProps = function () {
  this.title = 'Default';
  this.transparency = false;
  this.navbarGap = false;
  this.scrollpointOffset = false;
};

NavbarProps.prototype.getA = function () {
  return this.a;
};

NavbarProps.prototype.getB = function () {
  return this.b;
};

NavbarProps.prototype.logA = function () {
  return console.log("a=" + this.a);
};
