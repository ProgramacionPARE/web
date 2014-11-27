'use strict';

angular.module('pareApp')
  	.factory('Auto', function ($resource) {
	    return $resource('/api/autos/:id', {
	      id: '@_id'
		},
		{
	  		getByFecha: {
	        	method: 'GET',
		        params: {
					fecha_entrada:'@fecha_entrada',
					id_estacionamiento: '@id_estacionamiento'
		        },isArray: true
	      	}  
	  	});
	})
	.factory('Turno', function ($resource) {
	    return $resource('/api/turnos/:id', {
	      id: '@_id'
		},
		{
	  		getByFecha: {
	        	method: 'GET',
		        params: {
					fecha_apertura:'@fecha_apertura',
					id_estacionamiento: '@id_estacionamiento'
		        },isArray: true
	      	}  
	  	});
	})

	.factory('TurnoDetalle', function ($resource) {
	    return $resource('/api/detalleTurnos/:id', {
	      id: '@_id'
		},
		{
	  		getByTurno: {
	        	method: 'GET',
		        params: {
					id_turno:'@id_turno',
					id_estacionamiento: '@id_estacionamiento'
		        },isArray: true
	      	}  
	  	});
	})

	.factory('Estacionamiento', function ($resource) {
    	return $resource('/api/estacionamientos/:id', {
      		id: '@_id'
		});
  	})

	.factory('User', function ($resource) {
    	return $resource('/api/users/:id/:controller', {
      		id: '@_id'
			},{
		      	changePassword: {
		        method: 'PUT',
		        params: {
	          		controller:'password'
	        	}
	  		},
	      		get: {
	        	method: 'GET',
	        	params: {
	          	id:'me'
	        	}
	      	}
	  	});
  	});

