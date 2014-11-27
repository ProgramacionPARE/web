'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AutoSchema = new Schema({
  id: 			Number,
  serie: 		String,
  tarifa: 	Number,
  entrada_salida: String,
  progresivo: 	Number,
  fecha_entrada: String,
  hora_entrada:	String,
  fecha_salida:	String,
  hora_salida:	String,
  operador_entrada: Number,
  operador_salida:	Number,
  notas:		String,
  id_caseta: 	Number,	
  id_estacionamiento: String,
  monto:		Number,
  horas: 		Number,	
  minutos:		Number,
  id_turno_entrada: 	Number,
  id_turno_salida: 		Number,
  
  boleto_perdido:	String,
  boleto_cancelado: String,
  boleto_manual: String,
  boleto_contra: String,

  marca:		String,
  modelo:		String,
  color:		String,
  recibo:		String,
  descuento:	Number
  
});

module.exports = mongoose.model('Auto', AutoSchema);