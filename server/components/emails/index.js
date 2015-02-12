'use strict';

var schedule = require('node-schedule');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('4B6S4xLqRPFpJi5A3IUQcw');

var Estacionamiento = require('../../api/estacionamiento/estacionamiento.model'); 
var Turno = require('../../api/turno/turno.model');
var DetalleTurno = require('../../api/detalleTurno/detalleTurno.model');

schedule.scheduleJob({hour: 11, minute: 0}, function(){
    	console.log("Estoy envienado el reporte por correo")

		Number.prototype.padLeft = function(base,chr){
		   var  len = (String(base || 10).length - String(this).length)+1;
		   return len > 0? new Array(len).join(chr || '0')+this : this;
		}
		    

		var d = new Date(new Date().setDate(new Date().getDate()-1));
		var yesterday = [ d.getFullYear(), (d.getMonth()+1).padLeft(), d.getDate().padLeft()].join('-');
		

		var datos = [];

		Estacionamiento.find(function (err, estacionamientos) {
		    if(err) { return handleError(res, err); }
		    //Ya tengo los estacionamientos
		    estacionamientos.forEach(function(thisEs, i){
		    	datos.push({nombre:thisEs.nombre,a:[]});
				Turno.find({id_estacionamiento:thisEs._id,fecha_apertura:yesterday},function (err, turnos) {
		    		if(err) { return handleError(res, err); }
					
					turnos.forEach(function(thisTur, j){
						datos[i].a.push({tipo:thisTur.tipo_turno,a:[]});
						DetalleTurno.find({id_estacionamiento:thisEs._id, id_turno:thisTur.id},function (err, detalleTurnos) {
				    		if(err) { return handleError(res, err); }
				    		//var temp = {}
				    		//temp.monto = 0;
				    		//temp.n = 0;
				    		
				    		detalleTurnos.forEach(function(thisDet,k){
				    			datos[i].a[j].a.push({monto:thisDet.total,n:thisDet.no_bol_cobrados });
				    			//temp.monto += thisDet.total;
				    			//temp.n += thisDet.no_bol_cobrados;
				    		});
				    		//datos[i].a[j].a.push(temp)
				    		
					  	});
					});	
		    			
					});
				});

		});

		setTimeout(function(){
			var htmlMsg = "";

			for (var i = 0; i < datos.length; i++) {
				htmlMsg+= "<h2>"+datos[i].nombre+"</h2>\n";
				htmlMsg+= '<table>\n'
					+'	<thead>\n'
					+'		<tr>\n'
					+'			<th style="text-aling:center">Turno</th>\n'
					+'			<th style="text-aling:center">Operaciones</th>\n'
					+'			<th style="text-aling:center">Total</th>\n'
					+'		</tr>\n'
					+'	</thead>\n'
				 	+'	<tbody>\n'
				 	var temp = {}
		    		temp.monto = 0;
		    		temp.n = 0;
				for (var j = 0;j < datos[i].a.length; j++) {
						for (var k = 0; k < datos[i].a[j].a.length; k++) {
							temp.monto += parseFloat( datos[i].a[j].a[k].monto );
			    			temp.n += parseFloat( datos[i].a[j].a[k].n ) ;
							htmlMsg+= '		<tr>\n'
									 +'			<td style="text-aling:center">'+ datos[i].a[j].tipo +'</td>\n'
									 +'			<td style="text-aling:center">'+ datos[i].a[j].a[k].n +'</td>\n'
									 +'			<td style="text-aling:center">'+ datos[i].a[j].a[k].monto+'</td>\n'
									 +'		</tr>\n'
						}
					}	
					htmlMsg+= '		<tr>\n'
							 +'			<th style="text-aling:center">Total</th>\n'
							 +'			<th style="text-aling:center">'+ temp.n +'</th>\n'
							 +'			<th style="text-aling:center">'+ temp.monto+'</th>\n'
							 +'		</tr>\n'
					htmlMsg +='		</tbody>\n'
							+'</table>\n\n';	
			}
			
			var message = {
			    "html": htmlMsg,
			    "subject": "Reporte de ingresos del dia:  "+ yesterday,
			    "from_email": 'programacion@pare.com.mx',
			    "from_name": "Sistema online",
			    "to": [{
			            "email": "jlazo@pare.com.mx",
			            "name": "Lic. Jorge Lazo",
			            "type": "to"
			        },{
			            "email": "jmonteaga@pare.com.mx",
			            "name": "Ing. Monteaga",
			            "type": "to"
			        },{
			            "email": "programacion@pare.com.mx",
			            "name": "Programacion",
			            "type": "to"
			        },			        {
			            "email": "mtriana@pare.com.mx",
			            "name": "Lic. Manuel Triana",
			            "type": "to"
			        },{
			            "email": "ingresos@pare.com.mx",
			            "name": "Ingresos",
			            "type": "to"
			        },{
			            "email": "intranet@pare.com.mx",
			            "name": "Ingresos",
			            "type": "to"
			        },			        {
			            "email": "jamartinez@pare.com.mx",
			            "name": "Lic. Martinez",
			            "type": "to"
			        },
			        ]
			}

			mandrill_client.messages.send({"message": message}, 
				function(result) {
			    	console.log(result);
				}, function(e) {
				    // Mandrill returns the error as an object with name and message keys
				    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
				    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
			});



		}, 10000);


});