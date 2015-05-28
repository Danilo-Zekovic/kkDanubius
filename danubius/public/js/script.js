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

  // route for the contact page
  .when('/takmicenja', {
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
  .when('/kontakt',{
   	templateUrl : 'js/pages/kontakt.html',
   	controller  : 'kontaktCtrl'
  });
});

// create the controller and inject Angular's $scope
kkDanubius.controller('mainCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

kkDanubius.controller('selekcijeCtrl', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

kkDanubius.controller('takmicenjaCtrl', function($scope) {
  $scope.message = 'Contact us! JK. This is just a takmicenja page.';
});

kkDanubius.controller('galerijaCtrl', function($scope) {
  $scope.message = 'I am Danilo the owner of this application';
});

kkDanubius.controller('treneriCtrl', function($scope) {
  $scope.message = 'Hopefully it works',
  $scope.doSomething = doSomething();
});

kkDanubius.controller('klubCtrl', function($scope) {
  $scope.message = 'This is Kosrkaski Klub Danubius';
});

kkDanubius.controller('kontaktCtrl', function($scope) {
  $scope.message = 'Call me kk Danubius';
});

// javascript function 
var doSomething = function(){
  console.log("In the World!");
};
