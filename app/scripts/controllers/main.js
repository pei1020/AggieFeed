
'use strict';



/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('MyApp',[])
       .controller('MainCtrl', function ($scope, $http, ServiceCtrl)
{
     $scope.go = function() {
    //  $scope.msg = document.getElementById('cityname').value;
      ServiceCtrl.current_weather(function(data){

            //  console.log(data.activity.title);
            $scope.title = data.activity.title;
            $scope.source = data.activity.actor.author.displayName;
            //  $scope.city = data.name;
             $scope.temperature = Math.round(data.activity.object.content.temperature * 9/5 - 459.67)+"°F";
             $scope.current_weather = data.activity.object.content.weather;
             $scope.description = data.activity.object.content.description;
             $scope.img = "images/logo.jpg";
        });
      };
   });
