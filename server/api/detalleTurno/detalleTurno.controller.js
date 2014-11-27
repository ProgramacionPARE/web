'use strict';

var _ = require('lodash');
var DetalleTurno = require('./detalleTurno.model');

// Get list of detalleTurnos
exports.index = function(req, res) {
  DetalleTurno.find(req.query,function (err, detalleTurnos) {
    if(err) { return handleError(res, err); }
    return res.json(200, detalleTurnos);
  });
};

// Get a single detalleTurno
exports.show = function(req, res) {
  DetalleTurno.findById(req.params.id, function (err, detalleTurno) {
    if(err) { return handleError(res, err); }
    if(!detalleTurno) { return res.send(404); }
    return res.json(detalleTurno);
  });
};

// Creates a new detalleTurno in the DB.
exports.create = function(req, res) {
  DetalleTurno.create(req.body, function(err, detalleTurno) {
    if(err) { return handleError(res, err); }
    return res.json(201, detalleTurno);
  });
};

// Updates an existing detalleTurno in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  DetalleTurno.findById(req.params.id, function (err, detalleTurno) {
    if (err) { return handleError(res, err); }
    if(!detalleTurno) { return res.send(404); }
    var updated = _.merge(detalleTurno, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, detalleTurno);
    });
  });
};

// Deletes a detalleTurno from the DB.
exports.destroy = function(req, res) {
  DetalleTurno.findById(req.params.id, function (err, detalleTurno) {
    if(err) { return handleError(res, err); }
    if(!detalleTurno) { return res.send(404); }
    detalleTurno.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}