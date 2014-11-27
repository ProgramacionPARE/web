'use strict';

var _ = require('lodash');
var Estacionamiento = require('./estacionamiento.model');

// Get list of estacionamientos
exports.index = function(req, res) {
  Estacionamiento.find(function (err, estacionamientos) {
    if(err) { return handleError(res, err); }
    return res.json(200, estacionamientos);
  });
};

// Get a single estacionamiento
exports.show = function(req, res) {
  Estacionamiento.findById(req.params.id, function (err, estacionamiento) {
    if(err) { return handleError(res, err); }
    if(!estacionamiento) { return res.send(404); }
    return res.json(estacionamiento);
  });
};

// Creates a new estacionamiento in the DB.
exports.create = function(req, res) {
  Estacionamiento.create(req.body, function(err, estacionamiento) {
    if(err) { return handleError(res, err); }
    return res.json(201, estacionamiento);
  });
};

// Updates an existing estacionamiento in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Estacionamiento.findById(req.params.id, function (err, estacionamiento) {
    if (err) { return handleError(res, err); }
    if(!estacionamiento) { return res.send(404); }
    var updated = _.merge(estacionamiento, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, estacionamiento);
    });
  });
};

// Deletes a estacionamiento from the DB.
exports.destroy = function(req, res) {
  Estacionamiento.findById(req.params.id, function (err, estacionamiento) {
    if(err) { return handleError(res, err); }
    if(!estacionamiento) { return res.send(404); }
    estacionamiento.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}