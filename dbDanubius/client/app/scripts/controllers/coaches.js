'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CoachesCtrl
 * @description
 * # CoachesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('CoachesCtrl', function (
  $scope,
  Coach
) {
  $scope.coaches = Coach.getList().$object;
});