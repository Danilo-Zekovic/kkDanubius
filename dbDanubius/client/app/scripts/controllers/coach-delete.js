'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CoachDeleteCtrl
 * @description
 * # CoachDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CoachDeleteCtrl', function (
  $scope,
  $routeParams,
  Coach,
  $location
) {
  $scope.coach = Coach.one($routeParams.id).get().$object;
  $scope.deleteCoach = function() {
    $scope.coach.remove().then(function() {
      $location.path('/coaches');
    });
  };
  $scope.back = function() {
    $location.path('/coach/' + $routeParams.id);
  };
});
