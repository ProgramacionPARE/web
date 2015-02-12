'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.menu_estacionamiento.reportes', {
        url: '/reportes',
        templateUrl: 'app/admin/menu_estacionamiento/reportes/reportes.html',
        controller: 'ReportesCtrl',
			authenticate: true	
      });
  });