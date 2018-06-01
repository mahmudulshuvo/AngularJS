

var myAppModule = angular.module('myApp', [])
myAppModule.controller('Ctrler', function($scope) {

   $scope.copyText = function() {
       if (!$scope.sa) {
           document.getElementById("left").innerHTML = "Please input text!"
           document.getElementById("right").innerHTML = "Please input text!"
       }
       else {
           document.getElementById("left").innerHTML = "Copy Text"
           document.getElementById("right").innerHTML = "Copy Text"
           $scope.ba = angular.copy($scope.sa);
       }

   };

   $scope.clearText = function() {
       document.getElementById("left").innerHTML = "Clear Text"
       document.getElementById("right").innerHTML = "Clear Text"
       $scope.sa = undefined;
       $scope.ba = undefined;
   }
});
