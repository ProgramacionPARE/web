'use strict';

angular.module('pareApp')
  	.controller('TurnosCtrl', function ($scope) {
  		$scope.lAutos = [];
		
		$scope.$watch('turnosDetallesActualizado', function() {
			calcularRangos();
			console.log($scope.lAutos)
		});

	

		function calcularRangos(){
			$scope.lAutos = [];

			$scope.turnos.forEach(function(turno){
				var auTemp=[];
				turno.detallesTurno.forEach(function(detalleTurno){
					var auTemp2=[];
					$scope.autos.forEach(function(auto){
				
						var agregar = true;
						if(auto.dentro_fuera = "S" && auto.id_turno_salida == turno.id && detalleTurno.serie == auto.serie){
							auTemp2.forEach(function(auT){
								if(auT.monto == auto.monto){
									auT.no++;
									auT.total += auT.monto;
									agregar = false;
								}
							});
							if(agregar){
								var a = {};
								a.monto = auto.monto;
								a.no = 1;
								a.total = auto.monto;
								auTemp2.push(a);
							}
						}
					
					});
					auTemp.push(auTemp2);
				});
				$scope.lAutos.push(auTemp);
				
			});
			

		}

  });
