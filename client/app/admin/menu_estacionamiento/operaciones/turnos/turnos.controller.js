'use strict';

angular.module('pareApp')
  	.controller('TurnosCtrl', function ($scope) {
  		$scope.lAutos = [];
		
		$scope.$watch('turnosDetallesActualizado', function() {
			calcularRangos();
			console.log("sDetallesActualizado");
		});

	

		function calcularRangos(){
			$scope.lAutos = [];

			$scope.turnos.forEach(function(turno){
				var auTemp=[];
				turno.detallesTurno.forEach(function(detalleTurno){
					var auTemp2=[];
					$scope.autos.forEach(function(auto){
						
						var agregar = true;
						if(auto.dentro_fuera = "S" && auto.id_turno_salida == turno.id && detalleTurno.serie == auto.serie && auto.boleto_cancelado != "SI" && auto.boleto_perdido != "SI"){
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
					//Ordenan de menor a mayor
					auTemp2.sort(function(a,b){return(a.monto-b.monto)});
					//Ontengo los totales
					var a = {};
					a.no = 0;
					a.total = 0;
					auTemp2.forEach(function(conjunto){
						a.no+= conjunto.no;
						a.total += conjunto.total;
					})
					auTemp2.push(a);
					auTemp.push(auTemp2);
				});
				$scope.lAutos.push(auTemp);
				
			});
			

		}

  });
