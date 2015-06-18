'use strict';

describe('Controller: CoachViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CoachViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoachViewCtrl = $controller('CoachViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
