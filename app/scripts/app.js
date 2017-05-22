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
  'ngRoute'
])
  .config(function ($routeProvider) {
    /*.when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'controller'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })*/

      var routeConfig = {
			controller: 'MainCtrl',
			templateUrl: 'index.html',
			resolve: {
				go: function (ServiceCtrl) {
					// Get the correct module (API or localStorage).
					return ServiceCtrl.then(function (module) {
						module.getWeather(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

    $routeProvider
    			.when('/', routeConfig)
    			.when('/:status', routeConfig)
    			.otherwise({
    				redirectTo: '/'
    			});


  })
