'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */
angular
  .module('MyApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/index', {
        templateUrl: 'index.html',
        controller: 'MainCtrl',
        controllerAs: 'controller'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
