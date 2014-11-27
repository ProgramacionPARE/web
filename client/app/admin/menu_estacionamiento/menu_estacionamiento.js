'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
		.state('admin.menu_estacionamiento', {
			url: '/:name',
        	templateUrl: 'app/admin/menu_estacionamiento/menu_estacionamiento.html',
        	controller: 'MenuEstacionamientoCtrl',
			authenticate: true	
      	});
  });