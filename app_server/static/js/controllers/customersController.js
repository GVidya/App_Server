//var app = angular.module('myApp', []);
app.controller('customersController', function($scope, $http) {
  $http.get("http://www.w3schools.com/angular/customers.php")
  .success(function (response) {$scope.customer = response.records;});
});