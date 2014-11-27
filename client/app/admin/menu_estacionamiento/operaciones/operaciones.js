'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.menu_estacionamiento.operaciones', {
        url: '/operaciones',
        templateUrl: 'app/admin/menu_estacionamiento/operaciones/operaciones.html',
        controller: 'OperacionesCtrl',
		authenticate: true
      });
  });