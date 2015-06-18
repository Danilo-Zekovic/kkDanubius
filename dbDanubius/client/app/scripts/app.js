'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('http://localhost:5000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl'
      })
      .when('/coaches', {
        templateUrl: 'views/coaches.html',
        controller: 'CoachesCtrl'
      })
      .when('/create/coach', {
        templateUrl: 'views/coach-add.html',
        controller: 'CoachAddCtrl'
      })
      .when('/coach/:id', {
        templateUrl: 'views/coach-view.html',
        controller: 'CoachViewCtrl'
      })
      .when('/coach/:id/delete', {
        templateUrl: 'views/coach-delete.html',
        controller: 'CoachDeleteCtrl'
      })
      .when('/coach/:id/edit', {
        templateUrl: 'views/coach-edit.html',
        controller: 'CoachEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('CoachRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('Coach', function(CoachRestangular) {
  return CoachRestangular.service('coach');
})
  .factory('MovieRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('Movie', function(MovieRestangular) {
  return MovieRestangular.service('movie');
});
