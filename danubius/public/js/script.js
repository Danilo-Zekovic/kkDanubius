/*
 * script.js
 * Danilo Zekovic
 * Summer 2015
 * Angular script; routing
 */

console.log("Routing fooooooooooooooooooooooooooo");

var kkDanubius = angular.module('kkDanubius', ['ngRoute']);

    // configure our routes
kkDanubius.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'js/pages/home.html',
    controller  : 'mainCtrl'
  })

  // route for the about page
  .when('/selekcije', {
    templateUrl : 'js/pages/selekcije.html',
    controller  : 'selekcijeCtrl'
  })

  .when('/selekcije/2000-01', {
    templateUrl : 'js/pages/selekcije.html',
    controller  : 'selekcijeCtrl'
  })

  .when('/selekcije/1998-99', {
    templateUrl : 'js/pages/selekcije.html',
    controller  : 'selekcijeCtrl'
  })

  .when('/selekcije/2000-03', {
    templateUrl : 'js/pages/selekcije.html',
    controller  : 'selekcijeCtrl'
  })

  .when('/selekcije/mini-basket', {
    templateUrl : 'js/pages/selekcije.html',
    controller  : 'selekcijeCtrl'
  })

  // route for the contact page
  .when('/takmicenja', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/1998-ksv', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/1999-ksv', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/1998-1999-viba', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/2000-ksv', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/2001-ksns', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/2002-ksns', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  .when('/takmicenja/2003-ksns', {
    templateUrl : 'js/pages/takmicenja.html',
    controller  : 'takmicenjaCtrl'
  })

  //route for the danilo page
  .when('/galerija',{
   	templateUrl : 'js/pages/galerija.html',
   	controller  : 'galerijaCtrl'
  })

  //route for .js file proba
  .when('/treneri',{
   	templateUrl : 'js/pages/treneri.html',
   	controller  : 'treneriCtrl'
  })

  //route for .js file proba
  .when('/o-klubu',{
   	templateUrl : 'js/pages/klub.html',
   	controller  : 'klubCtrl'
  })

  //route for .js file proba
  .when('/events',{
    templateUrl : 'js/pages/events.html',
    controller  : 'galerijaCtrl'
  })

  //route for .js file proba
  .when('/kontakt',{
   	templateUrl : 'js/pages/kontakt.html',
   	controller  : 'kontaktCtrl'
  });
});

/***********************************************************************/

kkDanubius.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})


/************************************************************************/

/*/ create the controller and inject Angular's $scope
kkDanubius.controller('mainCtrl', function($scope, $http) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';

  $scope.slides=[];

  $http.get('js/json/home.json').success(function(data){
    $scope.slides=data;
  })
});

/*===========================================================/
kkDanubius.service("teamService", function($http, $q){
  var deferred = $q.defer();
  $http.get('js/json/selekcije.json').then(function(data){
    deferred.resolve(data);
  });

  this.getTeams = function (){
    return deferred.promise;
  }
})

kkDanubius.controller('selekcijeCtrl', function($scope, teamService) {
  $scope.message = 'Kosarkaskog Kluba Danubius';
  var promise = teamService.getTeams();
  promise.then(function(data){
    $scope.selekcije = data.data
  });
});
/*===========================================================/

kkDanubius.controller('takmicenjaCtrl', function($scope, $http) {
  $scope.message = 'Contact us! JK. This is just a takmicenja page.';

  $scope.teams=[];

  $http.get('js/json/takmicenja.json').success(function(data){
    $scope.teams=data;
  })
});

/*===========================================================/

kkDanubius.controller('galerijaCtrl', function($scope) {
  $scope.message = 'I am Danilo the owner of this application';
});

/*===========================================================/

kkDanubius.service("treneriService", function($http, $q){
  var deferred = $q.defer();
  $http.get('js/json/treneri.json').then(function(data){
    deferred.resolve(data);
  });

  this.getTrener = function (){
    return deferred.promise;
  }
})

kkDanubius.controller('treneriCtrl', function($scope, treneriService) {
  $scope.message = 'Hopefully it works',
  $scope.doSomething = doSomething();

  var promise = treneriService.getTrener();
  promise.then(function(data){
    $scope.treneri = data.data
  });
});

/*===========================================================/

kkDanubius.controller('klubCtrl', function($scope, $http) {
  $scope.message = 'This is Kosrkaski Klub Danubius';

  $scope.vip=[];

  $http.get('js/json/klub.json').success(function(data){
    $scope.vip=data;
  })

  $scope.trofeji=[];
  $http.get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json').success(function(data){
    $scope.trofeji=data;
  })
});

/*===========================================================/

kkDanubius.controller('kontaktCtrl', function($scope) {
  $scope.message = 'Call me kk Danubius';
});

/*===========================================================*/

/*/ javascript function 
var doSomething = function(){
  console.log("In the World!");
};
*/