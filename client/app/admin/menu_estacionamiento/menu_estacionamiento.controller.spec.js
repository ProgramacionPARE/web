'use strict';

describe('Controller: MenuEstacionamientoCtrl', function () {

  // load the controller's module
  beforeEach(module('pareApp'));

  var MenuEstacionamientoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuEstacionamientoCtrl = $controller('MenuEstacionamientoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
