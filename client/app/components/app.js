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
    'ngMockE2E',
    'ui.router',
    'ui.scrollpoint',
    'pascalprecht.translate',
    'matchMedia',
    'app.components.shared.translate.api',
    'app.components.shared.device-type.api',
    'app.components.shared.header.api',
    'app.components.shared.footer.api',
    'app.components.shared.products.products.api',
    'app.components.sections.main.api',
    'app.components.sections.contact.api',
    'app.components.sections.about.api',
    'app.components.sections.support.api',
    'app.components.sections.product-questionnaire.api'
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
      })

      .state('products', {
        url: '/products/:id/view',
        views: {
          'content': {
            controller: "ProductQuestionnaireReadController",
            controllerAs: "productQuestionnaire",
            templateUrl: 'components/sections/product-questionnaire/product-questionnaire.view.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');
  })

  /*
   * Mocking the backend!
   * */
  .run(function ($httpBackend, ProductsService) {
    //Mock the responses
    $httpBackend.whenGET('/products').respond(function (method, url, data) {
      var products = ProductsService.query();
      return [200, products, {}];
    });

    $httpBackend.whenGET(/\/products\/\d+/).respond(function (method, url, data) {
      // parse the matching URL to pull out the id (/games/:id)
      var id = url.split('/')[2];
      var product = ProductsService.get(id);
      return [200, product, {}];
    });

    //Execute the actual request in case the request is not in the list of mocked ones
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
  });