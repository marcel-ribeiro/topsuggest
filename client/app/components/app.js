'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.scrollpoint',
    'pascalprecht.translate',
    'app.components.shared.translate.api',
    'app.components.shared.header.api',
    'app.components.shared.footer.api',
    'app.components.shared.navbar.api',
    'app.components.shared.animated-dropdown.api',
    'app.components.sections.main.api',
    'app.components.sections.contact.api',
    'app.components.sections.about.api',
    'app.components.sections.support.api'
  ])

  .config(function ($translateProvider, PREFIX_LOCALES, SUFFIX_LOCALES, REGISTERED_LANGUAGE_KEYS, LOCALES_AND_LANGUAGE_KEYS_MAP) {

    $translateProvider
      .useStaticFilesLoader({
        prefix: PREFIX_LOCALES,
        suffix: SUFFIX_LOCALES
      })
      .registerAvailableLanguageKeys(REGISTERED_LANGUAGE_KEYS, LOCALES_AND_LANGUAGE_KEYS_MAP)
      .preferredLanguage('en')
      .fallbackLanguage('en')
      .determinePreferredLanguage()
      .useSanitizeValueStrategy('escapeParameters')
      .useCookieStorage();
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('main', {
        url: '/main',
        views: {
          'content': {
            controller: 'MainController',
            controllerAs: 'main',
            templateUrl: 'components/sections/main/main.view.html'
          }
        }
      })

      .state('about', {
        url: '/about',
        views: {
          'content': {
            templateUrl: 'components/sections/about/about.view.html'
          }
        }
      })

      .state('support', {
        url: '/support',
        views: {
          'content': {
            templateUrl: 'components/sections/support/support.view.html'
          }
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          'content': {
            templateUrl: 'components/sections/contact/contact.view.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');
  });