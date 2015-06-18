'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CoachViewCtrl
 * @description
 * # CoachViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CoachViewCtrl', function (
  $scope,
  $routeParams,
  Coach
) {
  $scope.viewCoach = true;
  $scope.coach = Coach.one($routeParams.id).get().$object;
});
