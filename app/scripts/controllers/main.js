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

  //displaying post
  $scope.addActivity= function(){
    var str = document.getElementById('cityname').value ;
    var Input = str.split(',');

    ServiceCtrl.current_weather(function(data){
    if(data !== -1 && data.activity.object.location.displayName === Input[0]){
      //binding data to variables
      $scope.title = data.activity.title;
      $scope.temperature = Math.round(data.activity.object.content.temperature * 9/5 - 459.67);
      $scope.source = data.activity.actor.author.displayName;
      $scope.current_weather= data.activity.object.content.weather;
      $scope.description = data.activity.object.content.description;
      $scope.image = 'images/logo.jpg';
      $scope.link = data.activity.generator.id;
      $scope.display.splice(0,0,{'image': $scope.image, 'title':$scope.title, 'source': $scope.source,
        'temperature':$scope.temperature,'current_weather': $scope.current_weather,
        'description':$scope.description, 'link': $scope.link});

      //updating the data --> solve second click problem
      $scope.$apply();

      //for temperature classification part, push to different arrays based on temp
      for(var i=0; i < $scope.display.length; i++){
        if($scope.display[i].temperature >= 85){
          $scope.arr1.push($scope.display[i]);
          $scope.$apply();
        }
        else if($scope.display[i].temperature >= 71 && $scope.display[i].temperature <= 84){
          $scope.arr2.push($scope.display[i]);
          $scope.$apply();
        }
        else if($scope.display[i].temperature >= 60 && $scope.display[i].temperature <= 70){
          $scope.arr3.push($scope.display[i]);
          $scope.$apply();
        }
        else{
          $scope.arr4.push($scope.display[i]);
          $scope.$apply();
        }
      }

      //empty variables
      $scope.title = '';
      $scope.temperature ='';
      $scope.source= '';
      $scope.current_weather = '';
      $scope.description = '';
      $scope.link= '';
    } // end of if

    //error handling
    //else if - when api returns 404 bad request
    //else - when api found possible answers
    else if(data === -1)
    {
        alert("Result not found!");
    }
    else{
        alert("Do you mean "+data.activity.object.location.displayName+" ?");
    }
  });

    //empty input text field
       document.getElementById('cityname').value = null;
   };
}])
.directive('byTemp', [function () {
    //directive for display by temperature
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
    };
}])
.directive('googleplace', [function() {
    //google autocomplete
    var options = {
      types: ['(cities)']
    };

    var input = document.getElementById('cityname');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    return autocomplete;
}]);
