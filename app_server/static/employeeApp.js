
var app = angular.module('employeeApp', ['ngRoute','tc.chartjs']);

app.config(function ($routeProvider) {
    $routeProvider
	.when('/', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/dashboard', {
	    controller: 'dashboardController',
        templateUrl: '/partials/dashboard.html'
    })
	.when('/edit', {
	    controller: 'newController',
        templateUrl: '/partials/edit.html'
    })
	
	 .when('/view', {
	    controller: 'viewController',
        templateUrl: '/partials/view.html'
    })
	
	.when('/back', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
	.when('/admin', {
	    controller: 'adminContoller',
        templateUrl: '/partials/admin.html'
    })
	.when('/customers', {
		controller: 'customersController',
        templateUrl: '/partials/customers.html'
    })
	.when('/todos', {
		controller: 'todosController',
        templateUrl: '/partials/todos.html'
    })
	 .when('/myTable', {
	    controller: 'tableController',
        templateUrl: '/partials/myTable.html'
	})
	
	.when('/expandingRow', {
	    controller: 'ExpandingController',
        templateUrl: '/partials/expandingRow.html',
		 css: ['css/expanding.css']
    })
	.when('/myRegister', {
	    controller: 'registerController',
        templateUrl: '/partials/myRegister.html'
	})

});


/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
