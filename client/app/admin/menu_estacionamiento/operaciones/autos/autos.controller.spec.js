'use strict';

describe('Controller: AutosCtrl', function () {

  // load the controller's module
  beforeEach(module('pareApp'));

  var AutosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutosCtrl = $controller('AutosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
