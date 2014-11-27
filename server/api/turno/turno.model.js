'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TurnoSchema = new Schema({
	id		 : Number,
	id_estacionamiento :String,
	tipo_turno: String,
	fecha_apertura: String,
	hora_apertura: String,
	fecha_cierre: String,
	hora_cierre: String,
	abierto_cerrado:String
});

module.exports = mongoose.model('Turno', TurnoSchema);

