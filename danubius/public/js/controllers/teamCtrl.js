kkDanubius.service("teamService", function($http, $q){
  var deferred = $q.defer();
  $http.get('js/json/selekcije.json').then(function(data){
    deferred.resolve(data);
  });

  this.getTeams = function (){
    return deferred.promise;
  }
})

kkDanubius.controller('selekcijeCtrl', function($scope, $http, teamService) {
  $scope.message = 'Kosarkaskog Kluba Danubius';
  var promise = teamService.getTeams();
  promise.then(function(data){
    $scope.selekcije = data.data
  });

  //$scope.selekcije=[];

  //$http.get('js/json/selekcije.json').success(function(data){
   // $scope.selekcije=data;
  //})
});