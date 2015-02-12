'use strict';

angular.module('pareApp')
  .controller('ReportesCtrl', function ($scope,$filter,Turno,TurnoDetalle) {  	
		var meses = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
		$scope.year = parseInt( $filter('date')(new Date(), 'yyyy'));
  		$scope.month  = meses[ parseInt($filter('date')(new Date(), 'MM'))];
  		$scope.m = meses.slice(1,meses.length); ;
		$scope.ye = []
		$scope.turnosResumen = [];
		
		for(var i = parseInt($scope.year)-5;i<parseInt($scope.year)+5;i++)
			$scope.ye.push(i);

	  	$scope.$watch('year',function(){
	  		cargarTurnos();
	  	});
	  	$scope.$watch('month',function(){
	  		//console.log($scope.month)
	  		cargarTurnos();
	  	});
	  	
	  	$scope.$watch('idEstacionameinto',function(){
	  		//console.log("Ya tengo id")
	  		cargarTurnos();
	  	});

		function cargarTurnos(){
			var pattern = $scope.year+"-[0-9]?"+meses.indexOf($scope.month)+"-+";
	  		
			$scope.turnos = Turno.getByFecha( {fecha_apertura: pattern ,id_estacionamiento: $scope.idEstacionameinto} ,function(){
				cargarDetalleTurnos();
 			});
		}

 		function cargarDetalleTurnos(){
			$scope.turnos.forEach(function(turno){
				turno.detallesTurno = TurnoDetalle.getByTurno({id_turno: turno.id ,id_estacionamiento: $scope.idEstacionameinto},function(){
					ordenarDatos();	
				});
				
			});
			
		};

	 	function ordenarDatos(){
	 		$scope.turnosResumen = [];
	 		for(var i = 1;i<=31;i++){
	 			var detalle = {fecha:i+"-"+$scope.month+"-"+$scope.year,operaciones:0,ingreso:0,iva:0,neto:0}
	 			$scope.turnos.forEach(function(t){
	 				if(i == parseInt(t.fecha_apertura.substring(8, 10))){
	 					t.detallesTurno.forEach(function(det){
	 							 	
	 					 	detalle.operaciones+=( parseInt(det.no_bol_cobrados) +
	 					 	 parseInt(det.no_bol_cancelados) + parseInt(det.no_bol_perdidos)+parseInt(det.no_bol_contra)+parseInt(det.no_bol_manual));
	 					 	detalle.ingreso+=parseFloat(det.total);
	 					 	
	 					 });
	 				}
					//if( t.fecha_apertura.substring(8, 10)  == $scope.year )
				});
				detalle.iva = parseFloat(detalle.ingreso*.16).toFixed(5);;
				detalle.neto = parseFloat(detalle.ingreso*.84).toFixed(5);
				
				$scope.turnosResumen.push(detalle);

	 		}
	 		
	 	}

  });
