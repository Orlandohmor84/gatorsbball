'use strict';

var app = angular.module('gatorhubApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html', 
            controller: 'homeController'
        })
        
        .when('/scores', {
            templateUrl : 'views/scores.html', 
            controller: 'scoresController'
        }) 
        
        
       .when('/stats', {
            templateUrl : 'views/stats.html', 
            controller: 'statsController'
        }) 
        
        .otherwise({redirectTo:'/home'})

});

