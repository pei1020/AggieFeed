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


      // var routeConfig = {
			// controller: 'MainCtrl',
			// templateUrl: 'index.html',
			// resolve: {
				// go: function (ServiceCtrl) {
					// Get the correct module (API or localStorage).
					// return ServiceCtrl.then(function (module) {
						// module.getWeather(); // Fetch the todo records in the background.
						// return module;
					// });
				// }
			// }
		// };
