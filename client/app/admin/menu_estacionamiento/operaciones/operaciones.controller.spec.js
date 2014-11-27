'use strict';

describe('Controller: OperacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('pareApp'));

  var OperacionesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperacionesCtrl = $controller('OperacionesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
