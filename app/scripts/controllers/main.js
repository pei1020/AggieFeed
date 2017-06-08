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

/*  var array=["Davis", "New York", "London"];

$(function() {
  $( "#cityname" ).autocomplete({
    source: dbCtrl.getlist(),
    response: function(event, ui) {
        if (ui.content.length === 0) {
            $("#empty-message").text("No results found");
            alert("No results found! Please enter a valid city.");
             document.getElementById('cityname').value = null;
        } else {
          $("#empty-message").empty();
            // alert("You have picked "+ui.content[0].value+"!");
        }
    }
})
}),*/

  $scope.addActivity= function(){
    var str = document.getElementById('cityname').value ;
    var Input = str.split(',');
    //console.log(Input[0]);

    if(/[^a-zA-Z_ ]/.test(Input[0])){
        alert("Invalid Input! Please enter valid city name.");
    }
    else{
      ServiceCtrl.current_weather(function(data){
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
           $scope.$apply();

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
          $scope.title = '';
          $scope.temperature ='';
          $scope.source= '';
          $scope.current_weather = '';
          $scope.description = '';
          $scope.link= '';
    });
  }
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
    };

  }])
  .directive('googleplace', [function() {
    //console.log('ingoogleplace');
      // return {
      //     link: function(scope, element, attrs, model) {
      //         var options = {
      //             types: [cities],
      //             componentRestrictions: {}
      //         };
      //         scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
      //
      //         google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
      //             scope.$apply(function() {
      //                 model.$setViewValue(element.val());
      //             });
      //         });
      //     }
      // };

 var options = {
  types: ['(cities)']
 };

 var input = document.getElementById('cityname');
 var autocomplete = new google.maps.places.Autocomplete(input, options);
 if(input.length > 0 && autocomplete == "") console.log('FUCCK this');
 return{

 };
  }]);
