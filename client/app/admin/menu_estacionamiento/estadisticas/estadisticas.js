'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.menu_estacionamiento.estadisticas', {
        url: '/estadisticas',
        templateUrl: 'app/admin/menu_estacionamiento/estadisticas/estadisticas.html',
        controller: 'EstadisticasCtrl',
		authenticate: true	
      });
  });