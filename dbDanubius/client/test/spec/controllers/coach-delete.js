'use strict';

describe('Controller: CoachDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CoachDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoachDeleteCtrl = $controller('CoachDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
