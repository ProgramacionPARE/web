'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EstacionamientoSchema = new Schema({
  id	: Number,
  nombre: String,
  direccion: String
});

module.exports = mongoose.model('Estacionamiento', EstacionamientoSchema);