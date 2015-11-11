app.controller('editController', function($scope) {
	Data.success(function(data) {   
		  $scope.employees = data.employees;
	   });
	 $scope.editUser = function(index){
		 $scope.newName = $scope.employees[index].name;
		 $scope.newAge = $scope.employees[index].age;
         $scope.newSkill = $scope.employees[index].class;
		 $scope.newAddress = $scope.employees[index].address;
         $scope.currentIndex = index;
	 };
	 
	 
	 
	 
	 
});