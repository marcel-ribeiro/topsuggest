/**
 * @ngdoc
 * @name topsuggest..navbar.controller.js
 * @description "description of the component in markdown"
 */
'use strict';
angular.module('app.components.shared.navbar.controller', ['app.components.shared.navbar.constants'])
  .controller('NavbarController', NavbarController);


function NavbarController($scope, $log, $location, TRANSPARENT_NAVBAR_LOCATIONS) {
  //Exposed interface
  var vm = this;
  var navbarProperties = {};
  vm.getScrollPointOffSet = function () {
    return navbarProperties.scrollpointOffset;
  };

  vm.isNavbarGapVisible = function () {
    return navbarProperties.navbarGap;
  };

  vm.isTransparent = function () {
    return navbarProperties.transparency;
  };
  vm.transparent = true;

  //logic
  $scope.$on('$locationChangeSuccess', function (event) {
    navbarProperties = getNavbarParameters($location.path(), vm, $log);
  });

  navbarProperties = getNavbarParameters($location.path(), vm, $log);


  /*
   * Retrieves the properties for a given path location
   * */
  function getNavbarParameters(path) {
    var navbarProps = new NavbarProps();

    if (contains(TRANSPARENT_NAVBAR_LOCATIONS, path)) {
      navbarProps.transparency = true;
      navbarProps.navbarGap = false;
      navbarProps.scrollpointOffset = 680;
    } else {
      navbarProps.transparency = false;
      navbarProps.navbarGap = true;
      navbarProps.scrollpointOffset = 0;
    }

    return navbarProps;
  }


  /*
   * TODO: extract to a ArrayUtils class
   * Does the array contain the specified object?
   * */
  function contains(array, object) {
    for (var i in array) {
      if (array[i] == object) {
        return true;
      }
    }

    return false;

  }

}

var NavbarProps = function () {
  this.transparency = false;
  this.navbarGap = true;
  this.scrollpointOffset = false;
};

NavbarProps.prototype.toString = function () {
  var result = "";
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      result += i + " = " + this[i] + "\n";
    }
  }
  return result;
};
