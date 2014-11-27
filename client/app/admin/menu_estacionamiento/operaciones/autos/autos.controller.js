'use strict';

angular.module('pareApp')
	.controller('AutosCtrl', function ($scope,$filter,$location,Auto,socket) {
	 	/*$scope.autos = Auto.getByFecha( {fecha:$scope.dt} ,function(){
	 		$scope.autosFilter = $scope.autos;
	 		totalizar();
	 	});
	*/	
		$scope.$watch('autosActualizado', function() {
			aplicarFiltros();
		});

		$scope.filtroTurnos= [];
	 	$scope.filtroDentro =true;
	 	$scope.filtroFuera  =true;
		$scope.filtroCancelado =true;
		$scope.filtroPerdido =true;
		$scope.filtroManual =true;
	 	
		$scope.$watch('turnosActualizado', function() {
			$scope.turnos.forEach(function(turnos){
				$scope.filtroTurnos.push(true);
				aplicarFiltros();
			})
		});
				
		$scope.cambioTurno = function(index){
			$scope.filtroTurnos[index]=!$scope.filtroTurnos[index];
			aplicarFiltros()
		}

	 	$scope.filtroDentroClick = function(){
	 		$scope.filtroDentro = !$scope.filtroDentro;
	 		aplicarFiltros();
	 	}
	 	$scope.filtroFueraClick = function(){
	 		$scope.filtroFuera = !$scope.filtroFuera;
	 		aplicarFiltros();
	 	}
		$scope.filtroCanceladoClick= function(){
			$scope.filtroCancelado = !$scope.filtroCancelado;
			aplicarFiltros();
	 	}
		$scope.filtroPerdidoClick = function(){
			$scope.filtroPerdido = !$scope.filtroPerdido;
			aplicarFiltros();
	 	}
		$scope.filtroManualClick = function(){
			$scope.filtroManual = !$scope.filtroManual;
			aplicarFiltros();
	 	}
	 	
	 	function totalizar(){
	 		$scope.total = 0;
	 		$scope.nAutos =  $scope.autosFilter.length;
	 		$scope.autosFilter.forEach(function(e){
	 			$scope.total += e.monto;	
	 		});
	 	
	 	}

	  	function aplicarFiltros(){
	 		$scope.autosFilter = [];

	 		$scope.turnos.forEach(function(turno,i){
	 			if($scope.filtroTurnos[i]){
	 				if($scope.filtroDentro)
			 			$scope.autosFilter = $scope.autosFilter.concat( $filter('filter')($scope.autos, {entrada_salida:"E",id_turno_entrada:turno.id}) )
			 		if($scope.filtroFuera)
			 			$scope.autosFilter = $scope.autosFilter.concat( $filter('filter')($scope.autos, 
			 				{entrada_salida:"S",boleto_cancelado:"NO",boleto_perdido:"NO",boleto_manual:"NO",id_turno_entrada:turno.id}) )
					if($scope.filtroCancelado)
						$scope.autosFilter = $scope.autosFilter.concat( $filter('filter')($scope.autos, {boleto_cancelado:"SI",id_turno_entrada:turno.id}) )
					if($scope.filtroPerdido)
						$scope.autosFilter = $scope.autosFilter.concat( $filter('filter')($scope.autos, {boleto_perdido:"SI",id_turno_entrada:turno.id}) )
					if($scope.filtroManual)
						$scope.autosFilter = $scope.autosFilter.concat( $filter('filter')($scope.autos, {boleto_manual:"SI",id_turno_entrada:turno.id}) )	
	 			}
	 			
	 		});
	 		

			$scope.autosFilter = $scope.autosFilter.sort(function(a,b){
				return(a.progresivo-b.progresivo)
			})

	 		totalizar();
	 	}

  });
