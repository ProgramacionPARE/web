'use strict';

describe('Controller: TurnosCtrl', function () {

  // load the controller's module
  beforeEach(module('pareApp'));

  var TurnosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TurnosCtrl = $controller('TurnosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
