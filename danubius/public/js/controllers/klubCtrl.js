kkDanubius.controller('klubCtrl', function($scope, $http) {
  $scope.message = 'This is Kosrkaski Klub Danubius';

  $scope.vip=[];

  $http.get('js/json/klub.json').success(function(data){
    $scope.vip=data;
  })
});