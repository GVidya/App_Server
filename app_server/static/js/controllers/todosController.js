app.controller('todosController', function($scope,$location, Data) {  
    $scope.todos = [
    {
        text: 'Raj',
        done: false
    }, {
        text: 'Mr Kumar',
        done: false
    }, {
        text: 'Nancy',
        done: false
    }, {
        text: 'Peter',
        done: false
    }, {
        text: 'James',
        done: false
    }, {
        text: 'David',
        done: false
    }, {
        text: 'Albert',
        done: false
    }, {
        text: 'Maggi',
        done: false
    }];
    $scope.addNew = function () {
        var todo = {};
        todo.done = false;

        todo.text = $scope.newTodo;

        $scope.todos.push(todo);
        $scope.newTodo = "";
    };
    $scope.remove = function () {
        var temp = angular.copy($scope.todos);
        $scope.todos = [];
        angular.forEach(temp, function (todo) {
            if (todo.done === false) {
                $scope.todos.push(todo);
            }
        });
    };
    $scope.mark = function () {

        angular.forEach($scope.todos, function (todo) {
            todo.done = true;
        });
    };
    $scope.undone = function () {

        angular.forEach($scope.todos, function (todo) {
            todo.done = false;
        });
    };
    $scope.show = function () {
        window.alert($scope.newvalue);
    };
    $scope.showList= true;
    $scope.$watch('mySelect',function(){       
        if($scope.mySelect === 'Hide')  {
          $scope.showList= false;
        }     
        else
        {
           $scope.showList= true;
        }
    });
}