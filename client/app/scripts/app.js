'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
//var translations = {
//  HEADLINE: 'What an awesome module!',
//  PARAGRAPH: 'Srsly!',
//  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
//  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
//  PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!'
//};
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'constants.translate',
    'pascalprecht.translate',
    'directives.layout.header',
    'directives.layout.footer'
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
            templateUrl: 'views/main.view.html'
          }
        }
      })

      .state('about', {
        url: '/about',
        views: {
          'content': {
            templateUrl: 'views/about.view.html'
          }
        }
      })

      .state('support', {
        url: '/support',
        views: {
          'content': {
            templateUrl: 'views/support.view.html'
          }
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          'content': {
            templateUrl: 'views/contact.view.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');
  });