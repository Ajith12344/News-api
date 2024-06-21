// scripts/services/newsService.js
angular.module('recipeApp').service('NewsService', function($http) {
    this.getNews = function() {
        return $http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6c34176196704e91ba310f6a37004564');
    };
});
