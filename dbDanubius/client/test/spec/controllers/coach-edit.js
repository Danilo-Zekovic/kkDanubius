'use strict';

describe('Controller: CoachEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CoachEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoachEditCtrl = $controller('CoachEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
