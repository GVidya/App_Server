app.controller('newController', function($scope,$location, Data) {
   //$scope.employees = Data.employees;
  // Data is service data.
    Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
	 
	 // adding the employees details
	$scope.addUser = function(){
     	 $scope.newEmp = {
			"name": $scope.newName,
			"age": $scope.newAge,
			"class": $scope.newSkill,
            "address":$scope.newAddress
	      };
		  
		  Data.newObj= $scope.newEmp;
	         $location.path("/view");
	};
	
	// editing the employee details
});
  
	

	

	 