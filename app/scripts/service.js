'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('MyApp')
  .service('ServiceCtrl', function ()
{
   this.current_weather = getWeather;
    function getWeather(callback){
    var cityname = document.getElementById('cityname').value;
        $.ajax({
          type: 'GET',
          url: "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=a57c72744b6d58125f048dbf8ef60523",
          success:function(data, display) {
            // console.log(city.main.temp);
            // console.log(city.weather[0].main);
            //  console.log(data.name);
            // $scope.city = city.name;
            callback(data);
            }
          })
    };
});
