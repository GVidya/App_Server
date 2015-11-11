app.controller('tableController', function($scope,$location, Data) {
   //$scope.employees = Data.employees;

    Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
	
	});