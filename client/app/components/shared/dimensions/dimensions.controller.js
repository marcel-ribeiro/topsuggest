/**
 * @ngdoc
 * @name app.components.shared.dimensions.controller
 * @description "This service is used to retrieve the type of media used to access the app (desktop, tablet or mobile)"
 */
'use strict';
angular.module('app.components.shared.dimensions.controller', [])
  .controller('DimensionsController', ['screenSize', 'MEDIAS', DimensionsController])


  .constant("MEDIAS", {
    "DESKTOP": "desktop",
    "TABLET": "tablet",
    "MOBILE": "mobile"
  });

function DimensionsController(screenSize, MEDIAS) {
  // Will fire every time the screen is resized
  screenSize.when('lg, md, sm, xs', function () {
    updateMediaVariable();
  });

  var vm = this;
  vm.media = MEDIAS.DESKTOP;
  vm.isDesktop = false;
  vm.isTablet = false;
  vm.isMobile = false;

  updateMediaVariable();

  //private function to update the internal variable
  function updateMediaVariable() {
    /* Large desktop */
    /* Portrait tablet to landscape and desktop */
    if (screenSize.is('lg, md')) {
      vm.media = MEDIAS.DESKTOP;
      vm.isDesktop = true;
      vm.isTablet = false;
      vm.isMobile = false;
    }

    /* Landscape phone to portrait tablet */
    else if (screenSize.is('sm')) {
      vm.media = MEDIAS.TABLET;
      vm.isDesktop = false;
      vm.isTablet = true;
      vm.isMobile = false;
    }

    /* Landscape phones and down */
    else if (screenSize.is('xs')) {
      vm.media = MEDIAS.MOBILE;
      vm.isDesktop = false;
      vm.isTablet = false;
      vm.isMobile = true;
    }
  }

}
