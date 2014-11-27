/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var DetalleTurno = require('./detalleTurno.model');

exports.register = function(socket) {
  DetalleTurno.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  DetalleTurno.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('detalleTurno:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('detalleTurno:remove', doc);
}