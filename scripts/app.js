var app = angular.module('newsApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
        .when('/business', {
            templateUrl: '/views/business.html',
            controller: 'BusinessController'
        })
        .when('/technology', {
            templateUrl: '/views/technology.html',
            controller: 'TechnologyController'
        })
        .when('/sports', {
            templateUrl: '/views/sports.html',
            controller: 'SportsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
