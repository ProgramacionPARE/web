'use strict';

var _ = require('lodash');
var Turno = require('./turno.model');

// Get list of turnos
exports.index = function(req, res) {
  req.query.fecha_apertura = new RegExp(req.query.fecha_apertura);
  Turno.find(req.query,function (err, turnos) {
    if(err) { return handleError(res, err); }
    return res.json(200, turnos);
  });
};   

// Get a single turno
exports.show = function(req, res) {
  Turno.findById(req.params.id, function (err, turno) {
    if(err) { return handleError(res, err); }
    if(!turno) { return res.send(404); }
    return res.json(turno);
  });
};

// Creates a new turno in the DB.
exports.create = function(req, res) {
    var query = {id_estacionamiento: req.body.id_estacionamiento, id: req.body.id};
    Turno.find(query,function (err, turnos) {
      if(err) { return handleError(res, err); }
      if(!turnos.length){
        Turno.create(req.body, function(err, turno) {
          if(err) { return handleError(res, err); }
          return res.json(201, turno);
        });  
      }else{
        console.log("Turno duplicado");
        return res.json(200, turnos[0]);
      }
    });

};

// Updates an existing turno in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Turno.findById(req.params.id, function (err, turno) {
    if (err) { return handleError(res, err); }
    if(!turno) { return res.send(404); }
    var updated = _.merge(turno, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, turno); 
    });
  });
};

// Deletes a turno from the DB.
exports.destroy = function(req, res) {
  Turno.findById(req.params.id, function (err, turno) {
    if(err) { return handleError(res, err); }
    if(!turno) { return res.send(404); }
    turno.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}