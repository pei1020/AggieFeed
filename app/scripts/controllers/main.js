'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('MyApp',['ServiceCtrl'])
  .controller('MainCtrl', function ($scope, $location, $http)
{
  $scope.go = function(cityname){
    ServiceCtrl.getWeather(cityname);
  }

});
