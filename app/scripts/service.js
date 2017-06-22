'use strict';
/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */

angular.module('myServices', [])
  .service('ServiceCtrl', ['ISO3166',function (ISO3166)
{
  //call weather api and asign to aggiefeed format
  function getWeather(callback){
  var str = document.getElementById('cityname').value ;
  var place = str.split(',');
  var cityname = place[0];
  var countryname;
  var json = [];

  //to get country code for more accurate data
  ISO3166.getCode(function(data){
    countryname = data;
  });

  //ajax call
  $.ajax({
    type: 'POST',
    url: "http://api.openweathermap.org/data/2.5/weather?q="+cityname+","+countryname+"&appid=a57c72744b6d58125f048dbf8ef60523",})
    .done(function(data) {
        json = {
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
                "title": "Current Weather of "+ data.name+", "+data.sys.country,
                "generator":{
                  "id": "http://openweathermap.org"
                },
                "object": {
                  "ucdSrcId" : "1234",
                  "objectType": "notification",
                  "content": {
                    "temperature":data.main.temp,
                    "weather": data.weather[0].main,
                    "description": data.weather[0].description},
                  "ucdEdusModel" : {
                    "url" : "http://openweathermap.org",
                    "urlDisplayName" : "openweathermap",
                    "event" : {
                      "location": data.name,
                      "event.isAllDay": true,
                      "hasStartTime" : false,
                      "startDate": "2017-05-18T08:00:00.000Z",
                      "endDate": "2017-05-18T23:59:00.000Z"
                    }
                  },
                  "location" : {
                    "displayName": data.name,
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
                "to":[
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
            };
               callback(json);
          })
          .fail(function (){
            callback(-1);
          });
       }
         this.current_weather = getWeather;
    }]);
