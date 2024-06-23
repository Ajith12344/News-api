// scripts/controllers.js

angular.module('newsApp')
    .controller('HomeController', function($scope, NewsService) {
        NewsService.getTopHeadlines('general')
            .then(function(response) {
                $scope.articles = response.data.articles;
            })
            .catch(function(error) {
                console.error('Error fetching home news:', error);
            });
    })
    .controller('BusinessController', function($scope, NewsService) {
        NewsService.getTopHeadlines('business')
            .then(function(response) {
                $scope.articles = response.data.articles;
            })
            .catch(function(error) {
                console.error('Error fetching business news:', error);
            });
    })
    .controller('TechnologyController', function($scope, NewsService) {
        NewsService.getTopHeadlines('technology')
            .then(function(response) {
                $scope.articles = response.data.articles;
            })
            .catch(function(error) {
                console.error('Error fetching technology news:', error);
            });
    })
    .controller('SportsController', function($scope, NewsService) {
        NewsService.getTopHeadlines('sports')
            .then(function(response) {
                $scope.articles = response.data.articles;
            })
            .catch(function(error) {
                console.error('Error fetching sports news:', error);
            });
    });
