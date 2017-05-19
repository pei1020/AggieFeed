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
    var json = [];
        $.ajax({
          type: 'GET',
          url: "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=a57c72744b6d58125f048dbf8ef60523",
          success:function(data, display) {
            for(var i = data.count -1; i >=0 ; i--){
              json[data.count - 1 - i] = {
                "activity" : {
                "icon":  "icon-bullhorn",
                "actor": {
                  "id" : "888",
                  "objectType": "person",
                  "displayName": "City Weather Forecast",
                  "author" : {
                    "id" : data.coord.id,
                    "displayName" : "openweathermap"
                  },//end of author
                  "image" : {
                    "color" : "#f1c40f"
                  }//end of image
                },//end of actor
                "verb": "post",
                "title": "Aggie Feed Activity",
                "generator":{
                  "id": "http://openweathermap.org/api"
                },
                "object": {
                  "ucdSrcId" : data.main.temp * 9/5 - 459.76,
                  "objectType": "notification",
                  "content": data.main.weather[0].main,
                  "ucdEdusModel" : {
                    "url" : "http://openweathermap.org",
                    "urlDisplayName" : "openweathermap",
                    "event" : {
                      "location": data.main.name,
                      "event.isAllDay": true,
                      "hasStartTime" : false,
                      "startDate": "2017-05-18T08:00:00.000Z",
                      "endDate": "2017-05-18T23:59:00.000Z"
                    }
                  },
                  "location" : {
                    "displayName": data.main.name,
                    "geo" : {
                      "latitude": data.coord[0],
                      "longitude": data.coord[1]
                    },
                    "geometry" : {
                      "type": "Point",
                      "coordinates": [data.coord[0],  data.coord[1]]
                    }
                  }
                },
                "to" : [
                  {
                    "id": "912234760",
                    "g": false,
                    "i": false
                  }
                ],
                "ucdEdusMeta" : {
                  "labels" : ["~student-life", "~campus-life", "weather", "forecast"],
                  "startDate" : "2017-05-18T08:00:00.000Z",
                  "endDate" : "2017-05-18T23:59:00.000Z"
                }
              }

            }
            }
              callback(data);
          }
    });
}
});
