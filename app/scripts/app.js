'use strict';
/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */

angular.module('MyApp', [
  'ngMaterial',
  'ngAria',
  'myControllers',
  'myServices',
  'iso-3166-country-codes',
  'ngRoute',
  'ngResource',
  'angular.filter'
])
  .config(['$routeProvider',function ($routeProvider) {
     $routeProvider
    .when('/main', {
        templateUrl: 'index.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
    }]);
