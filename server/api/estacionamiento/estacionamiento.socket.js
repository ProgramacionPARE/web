/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Estacionamiento = require('./estacionamiento.model');

exports.register = function(socket) {
  Estacionamiento.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Estacionamiento.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('estacionamiento:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('estacionamiento:remove', doc);
}