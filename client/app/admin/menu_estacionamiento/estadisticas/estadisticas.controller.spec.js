'use strict';

describe('Controller: EstadisticasCtrl', function () {

  // load the controller's module
  beforeEach(module('pareApp'));

  var EstadisticasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstadisticasCtrl = $controller('EstadisticasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
