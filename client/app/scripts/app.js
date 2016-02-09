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
    'shared.layout.header',
    'shared.layout.footer'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('main', {
        url: '/main',
        views: {
          'content': {
            templateUrl: 'views/main.html'
          }
        }
      })

      .state('about', {
        url: '/about',
        views: {
          'content': {
            templateUrl: 'views/about.html'
          }
        }
      })

      .state('help', {
        url: '/help',
        views: {
          'content': {
            templateUrl: 'views/help.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');
  });