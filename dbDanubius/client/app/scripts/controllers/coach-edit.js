'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CoachEditCtrl
 * @description
 * # CoachEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CoachEditCtrl', function (
  $scope,
  $routeParams,
  Coach,
  $location
) {
  $scope.editCoach = true;
  $scope.coach = {};
  Coach.one($routeParams.id).get().then(function(coach) {
    $scope.coach = coach;
    $scope.saveCoach = function() {
      $scope.coach.save().then(function() {
        $location.path('/coach/' + $routeParams.id);
      });
    };
  });
});