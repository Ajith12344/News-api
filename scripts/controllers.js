// scripts/controllers.js
angular.module('recipeApp').controller('HomeController', function($scope, NewsService) {
    NewsService.getNews().then(function(response) {
        $scope.news = response.data;
    }).catch(function(error) {
        console.error('Error fetching news:', error);
    });
});
