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
  .when('/contact', {
    templateUrl : 'pages/contact.html',
    controller  : 'contactController'
  })

  //route for the danilo page
  .when('/danilo',{
   	templateUrl : 'pages/danilo.html',
   	controller  : 'daniloController'
  })

  //route for .js file proba
  .when('/proba',{
   	templateUrl : 'pages/proba.js',
   	controller  : 'probaController'
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

kkDanubius.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});

kkDanubius.controller('daniloController', function($scope) {
  $scope.message = 'I am Danilo the owner of this application';
});

kkDanubius.controller('probaController', function($scope) {
  $scope.message = 'Hopefully it works',
  $scope.doSomething = doSomething();
});

// javascript function 
var doSomething = function(){
  console.log("In the World!");
  var something = "<p>Danilo Zekovic</p>";
  jQuery(".foo").append('<p ng-scope>Danilo Zekovic</p>');
};
