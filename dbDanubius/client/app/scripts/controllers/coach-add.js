'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CoachAddCtrl
 * @description
 * # CoachAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CoachAddCtrl', function (
  $scope,
  Coach,
  $location
) {
  $scope.coach = {};
  $scope.saveCoach = function() {
    Coach.post($scope.coach).then(function() {
      $location.path('/coaches');
    });
  };
});
