app.controller('viewController', function($scope,$location, Data) {
	     Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
	    $scope.newObj=Data.newEmp;
	});