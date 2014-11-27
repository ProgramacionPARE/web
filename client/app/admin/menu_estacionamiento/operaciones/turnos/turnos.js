'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.menu_estacionamiento.operaciones.turnos', {
        url: '/turnos',
        templateUrl: 'app/admin/menu_estacionamiento/operaciones/turnos/turnos.html',
        controller: 'TurnosCtrl',
		authenticate: true
      });
  });