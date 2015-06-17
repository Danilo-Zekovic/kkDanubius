// create the controller and inject Angular's $scope
kkDanubius.controller('mainCtrl', function($scope, $http) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';

  $scope.slides=[];

  $http.get('js/json/home.json').success(function(data){
    $scope.slides=data;
  })
});