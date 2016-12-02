var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);
 console.log("myApp!");

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/jeff', {
            templateUrl: '/views/templates/jeff.html',
            controller: 'JeffController',
            controllerAs: 'jc'
        })
        .otherwise({
            redirectTo: '/jeff'
        });

// app.controller('firstController', function() {
//   console.log('firstController up and running');
//   var self = this;
//   self.message = "Welcome!"
// });

}]);
