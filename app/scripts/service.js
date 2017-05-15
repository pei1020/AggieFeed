'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('MyApp',[])
  .controller('ServiceCtrl', function ($scope, $location, $http)
{
  return{
    getWeather: function(){
      var $city = $('#cityname');

        $.ajax({
          type: 'GET',
          url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a57c72744b6d58125f048dbf8ef60523",
          success:function(city) {
            console.log(city.main.temp);
            return city.main.temp;
            }
    }

      });
};
});
