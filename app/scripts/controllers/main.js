'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('MyApp')
  .controller('MainCtrl', function ($scope, $http, ServiceCtrl)
{

    ServiceCtrl.getWeather('#cityname'.value);
});
