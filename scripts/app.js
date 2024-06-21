// scripts/app.js
angular.module('recipeApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
