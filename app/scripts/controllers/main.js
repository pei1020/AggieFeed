'use strict';

/**
 * @ngdoc function
 * desktopApp.controller:MainCtrl
 *
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('myControllers',[])
        .controller('MainCtrl', ['$scope', '$http', 'ServiceCtrl',function ($scope, $http, ServiceCtrl)
{
  $scope.display = [];
  $scope.arr1 =[];
  $scope.arr2=[];
  $scope.arr3=[];
  $scope.arr4=[];


  $scope.addActivity= function(){
    var Input = document.getElementById('cityname').value ;
    if(/[^a-zA-Z_ ]/.test(Input))
      alert("Invalid Input! Please enter valid city name.");
    else{
      ServiceCtrl.current_weather(function(data){
          /*  $scope.display.push({'Logo': "images/logo.jpg",
            'Title':data.activity.title, 'Source':data.activity.actor.author.displayName,
            'temperature':Math.round(data.activity.object.content.temperature * 9/5 - 459.67)+"°F",
            'Current Weather':data.activity.object.content.weather, 'Description':data.activity.object.content.description
          });*/
            $scope.title = data.activity.title;
             $scope.temperature = Math.round(data.activity.object.content.temperature * 9/5 - 459.67);
             $scope.source = data.activity.actor.author.displayName;
             $scope.current_weather= data.activity.object.content.weather;
             $scope.description = data.activity.object.content.description;
             $scope.image = 'images/logo.jpg';
             $scope.link = data.activity.generator.id;
          $scope.display.splice(0,0,{'image': $scope.image, 'title':$scope.title, 'source': $scope.source, 'temperature':$scope.temperature,
                                      'current_weather': $scope.current_weather, 'description':$scope.description, 'link': $scope.link});


             for(var i=0; i < $scope.display.length; i++){
                if($scope.display[i].temperature >= 85){
                    $scope.arr1.push($scope.display[i]);

                }
                else if($scope.display[i].temperature >= 71 && $scope.display[i].temperature <= 84){
                    $scope.arr2.push($scope.display[i]);
                }
                else if($scope.display[i].temperature >= 60 && $scope.display[i].temperature <= 70){
                        $scope.arr3.push($scope.display[i]);
                }
                else{
                  $scope.arr4.push($scope.display[i]);
                }
            }
          $scope.title = '';
          $scope.temperature ='';
          $scope.source= '';
          $scope.current_weather = '';
          $scope.description = '';
          $scope.link= '';
    })}
       document.getElementById('cityname').value = null;
     };
   }])
  .directive('byTemp', [function () {
    return {
      restrict: 'E',
      scope:{
        display: '=',
        title: '=',
        arr1: '=',
        arr2: '=',
        arr3: '=',
        arr4: '='
      },
      templateUrl: 'views/tempOrder.html'
      // controller:function($scope){
//
      // },

    };

  }]);


    /* $scope.go = function() {
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
   });*/
