/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Auto = require('./auto.model');

exports.register = function(socket) {
  Auto.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Auto.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  	socket.emit('auto:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('auto:remove', doc);
}