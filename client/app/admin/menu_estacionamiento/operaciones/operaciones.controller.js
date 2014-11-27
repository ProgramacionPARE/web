'use strict';

angular.module('pareApp')
  .controller('OperacionesCtrl', function ($scope,$location,$filter,socket,Auto,Turno,TurnoDetalle) {

	$scope.dt=new Date();
 	$scope.opened = false;
	$scope.format = 'yyyy-MM-dd';
	$scope.autosActualizado = 0;
	$scope.turnosActualizado = 0;
	$scope.turnosDetallesActualizado = 0;
	$scope.urlOperacion  = $location.path().split("/")[4];

	$scope.setActive = function(active){
  		$scope.urlOperacion = active;
  	}
  	
	$scope.today = function(){
		$scope.dt = new Date();
	};

	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
  	};

  	function cargarAutos(){
  		$scope.autos = Auto.getByFecha( { fecha_entrada: $filter('date')($scope.dt, 'yyyy-MM-dd'),id_estacionamiento: $scope.idEstacionameinto} ,function(){
		$scope.autosFilter = $scope.autos;
		$scope.autosActualizado++;
 		});
  	}

	function cargarTurnos(){
  		$scope.turnos = Turno.getByFecha( {fecha_apertura: $filter('date')($scope.dt, 'yyyy-MM-dd'),id_estacionamiento: $scope.idEstacionameinto} ,function(){
			$scope.turnosActualizado++;
			cargarDetalleTurnos();

 		});
  	}

	function cargarDetalleTurnos(){
		$scope.turnos.forEach(function(turno){
			turno.detallesTurno = TurnoDetalle.getByTurno({id_turno: turno.id ,id_estacionamiento: $scope.idEstacionameinto},function(){
				$scope.turnosDetallesActualizado++;
			});
		});	
 	};
  	 
  

  	$scope.$watch('dt', function() {
      	cargarAutos();
      	cargarTurnos();
   });
	
	socket.watchUpdate("auto",function(){
		cargarAutos();
    })
	socket.watchUpdate("turno",function(){
		cargarTurnos();
    })
    socket.watchUpdate("detalleTurno",function(){
		cargarDetalleTurnos();
    })
	


  });
