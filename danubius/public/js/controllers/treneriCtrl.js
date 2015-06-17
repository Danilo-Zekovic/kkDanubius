kkDanubius.service("treneriService", function($http, $q){
  var deferred = $q.defer();
  $http.get('js/json/treneri.json').then(function(data){
    deferred.resolve(data);
  });

  this.getTrener = function (){
    return deferred.promise;
  }
})

kkDanubius.controller('treneriCtrl', function($scope, $http) {
  $scope.message = 'Hopefully it works',
  //$scope.doSomething = doSomething();

  /*var promise = treneriService.getTrener();
  promise.then(function(data){
    $scope.treneri = data.data
  });*/

  $scope.treneri=[];

  $http.get('js/json/treneri.json').success(function(data){
    $scope.treneri=data;
  })
});