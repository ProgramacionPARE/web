'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DetalleTurnoSchema = new Schema({
	id: Number,
	id_turno: String,
	id_estacionamiento: String,
	serie: String,
	folio_inicial: String,
	folio_final: String,
	no_bol: String,
	no_bol_turno_a: String,
	no_bol_cancelados: String,
	no_bol_perdidos: String,
	no_bol_cobrados: String,
	no_bol_contra: String,
	no_bol_manual: String,
	no_bol_turno_s: String,
	total: String

});

module.exports = mongoose.model('DetalleTurno', DetalleTurnoSchema);