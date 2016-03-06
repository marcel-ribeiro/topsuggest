/**
 * @ngdoc
 * @name topsuggest..translate.controller
 * @description "description of the component in markdown"
 */
'use strict';

angular.module('app.components.shared.translate.controller', ['app.components.shared.translate.constants'])

  .controller('TranslateController', TranslateController);

function TranslateController($log, $translate, REGISTERED_LANGUAGE_KEYS) {
  var vm = this;

  vm.locales = [];
  angular.forEach(REGISTERED_LANGUAGE_KEYS, function (languageKey) {
    var languageName = "LANGUAGES.LANGUAGE_NAME_" + languageKey.toUpperCase();
    vm.locales.push({id: languageKey, name: languageName});
  });


  vm.dropboxitemselected = function (item) {
    vm.selectedItem = item;

    $log.info("Switching the language to %s", item);
    $translate.use(item);
  };
}

