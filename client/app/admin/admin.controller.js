'use strict';

angular.module('pareApp')
	.controller('AdminCtrl', function ($scope, $http, Auth,$location,Estacionamiento,Auto,socket) {

		$scope.urlNick  = $location.path().split("/")[2];
		//console.log($scope.urlNick);
		$scope.estacionamientos = Estacionamiento.query(function(){
			if($scope.urlNick!="")
				$scope.estacionamientos.forEach(function (estacionamiento){
					//console.log("Entro")
					if($scope.urlNick === estacionamiento.nick){
						$scope.idEstacionameinto = estacionamiento._id;
					}
				});
		});

		socket.syncUpdates("estacionamiento",$scope.estacionamientos,function(){
			//console.log("Actualizado");
		})
		
		$scope.setEstacionamiento = function(id){
			$scope.idEstacionameinto = id;
	 	}

		$scope.cerrarSesion = function(){
			Auth.logout();
				$location.path('/');
			};
	});
