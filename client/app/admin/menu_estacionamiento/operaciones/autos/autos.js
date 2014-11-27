'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.menu_estacionamiento.operaciones.autos', {
        url: '/autos',
        templateUrl: 'app/admin/menu_estacionamiento/operaciones/autos/autos.html',
        controller: 'AutosCtrl',
		authenticate: true
      });
  });