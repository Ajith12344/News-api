// scripts/services/newsService.js

angular.module('newsApp')
    .service('NewsService', function($http) {
        var apiKey = '6c34176196704e91ba310f6a37004564';  // Replace with your News API key
        var apiUrl = 'https://newsapi.org/v2/top-headlines';

        this.getTopHeadlines = function(category) {
            var url = apiUrl + '?country=in&category=' + category + '&apiKey=' + apiKey;
            return $http.get(url);
        };

        this.getBusinessNews = function() {
            return this.getTopHeadlines('business');
        };

        this.getSportsNews = function() {
            return this.getTopHeadlines('sports');
        };

        this.getTechnologyNews = function() {
            return this.getTopHeadlines('technology');
        };
    });
