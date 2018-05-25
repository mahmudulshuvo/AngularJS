

var myAppModule = angular.module('myApp', [])
myAppModule.controller('Ctrler', function($scope) {

   $scope.copyText = function() {
       if (!$scope.sa) {
           document.getElementById("demo").innerHTML = "Please input text!"
       }
       else {
           document.getElementById("demo").innerHTML = "Copy Text"
           $scope.ba = angular.copy($scope.sa);
       }

   };

   $scope.clearText = function() {
       document.getElementById("demo").innerHTML = "Clear Text"
       $scope.sa = null;
       $scope.ba = null;
   }
});
