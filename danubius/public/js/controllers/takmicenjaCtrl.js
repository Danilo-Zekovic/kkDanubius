kkDanubius.controller('takmicenjaCtrl', function($scope, $http) {
  $scope.message = 'Contact us! JK. This is just a takmicenja page.';

  $scope.teams=[];

  $http.get('js/json/takmicenja.json').success(function(data){
    $scope.teams=data;
  })
});
