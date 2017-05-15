'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('MyApp',[])
  .controller('MainCtrl', function ($scope, $location, $http)
{
    $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Taipei&appid=a57c72744b6d58125f048dbf8ef60523').success(function(data)
    {
      console.log('TEST');
    })
    $scope.weather =
    {
      city: '',
      temperature: '',
      weather: '',
      description: ''
    };
    /*var search_button = document.getElementById("search_button");
    search_button.addEventListener("click", function()
    {
      var ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=Taipei&appid=a57c72744b6d58125f048dbf8ef60523');
      ourRequest.onload = function()
      {
        var ourData = JSON.parse(ourRequest.responseText);
        console.og(ourData[0]);
      };
    });
ourRequest.send();*/
});
