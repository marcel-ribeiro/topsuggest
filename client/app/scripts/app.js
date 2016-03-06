'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.scrollpoint',
    'pascalprecht.translate',
    'components.shared.translate.api',
    'components.shared.header.api',
    'components.shared.footer.api',
    'components.shared.navbar.api',
    'components.shared.animated-dropdown.api',
    'components.sections.main.api',
    'components.sections.contact.api',
    'components.sections.about.api',
    'components.sections.support.api'
  ])

  .config(function ($translateProvider, PREFIX_LOCALES, SUFFIX_LOCALES, LOCALES) {

    $translateProvider
      .useStaticFilesLoader({
        prefix: PREFIX_LOCALES,
        suffix: SUFFIX_LOCALES
      })
      .registerAvailableLanguageKeys(['en', 'pt', 'de'], LOCALES)
      .preferredLanguage('en')
      .fallbackLanguage('en')
      .determinePreferredLanguage()
      .useSanitizeValueStrategy('escapeParameters');
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('main', {
        url: '/main',
        views: {
          'content': {
            controller: 'MainController',
            controllerAs: 'main',
            templateUrl: 'scripts/main/main.view.html'
          }
        }
      })

      .state('about', {
        url: '/about',
        views: {
          'content': {
            templateUrl: 'scripts/about/about.view.html'
          }
        }
      })

      .state('support', {
        url: '/support',
        views: {
          'content': {
            templateUrl: 'scripts/support/support.view.html'
          }
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          'content': {
            templateUrl: 'scripts/contact/contact.view.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');
  });