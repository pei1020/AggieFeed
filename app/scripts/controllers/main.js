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
     $scope.go = function() {
    //  $scope.msg = document.getElementById('cityname').value;
      ServiceCtrl.current_weather(function(data){
            $scope.city = data.name;
            $scope.temperature = data.main.temp;
            $scope.current_weather = data.weather[0].main;
            $scope.description = data.weather[0].description;
            // console.log(data.weather[0].main);
        });
      };
   });
