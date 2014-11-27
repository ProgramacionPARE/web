'use strict';

angular.module('pareApp')
	.controller('AdminCtrl', function ($scope, $http, Auth,$location,Estacionamiento,Auto,socket) {

		$scope.estacionamientos = Estacionamiento.query();

		socket.syncUpdates("estacionamiento",$scope.estacionamientos,function(){
			console.log("Actualizado");
		})
		$scope.setEstacionamiento = function(id){
			$scope.idEstacionameinto = id;
	 	}

		$scope.cerrarSesion = function(){
			Auth.logout();
				$location.path('/');
			};
	});
