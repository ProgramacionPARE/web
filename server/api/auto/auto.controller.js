'use strict';

var _ = require('lodash');
var Auto = require('./auto.model');

// Get list of autos
exports.index = function(req, res) {
  Auto.find(req.query,function (err, autos) {
    if(err) { return handleError(res, err); }
    return res.json(200, autos);
  });
};

// Get a single auto
exports.show = function(req, res) {
  Auto.findById(req.params.id, function (err, auto) {
    if(err) { return handleError(res, err); }
    if(!auto) { return res.send(404); }
    return res.json(auto);
  });
};

// Creates a new auto in the DB.
exports.create = function(req, res) {
  var query = {id_estacionamiento: req.body.id_estacionamiento, id: req.body.id}
  Auto.find(query,function (err, autos) {
    if(err) { return handleError(res, err); }
    if(!autos.length){
        Auto.create(req.body, function(err, auto) {
          if(err) { return handleError(res, err); }
          return res.json(201, auto);
      });
    }else{
      console.log("Auto duplicado");
       return res.json(200, autos[0]);
    }
  });

};

// Updates an existing auto in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Auto.findById(req.params.id, function (err, auto) {
    if (err) { return handleError(res, err); }
    if(!auto) { return res.send(404); }
    var updated = _.merge(auto, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, auto);
    });
  });
};

// Deletes a auto from the DB.
exports.destroy = function(req, res) {
  Auto.findById(req.params.id, function (err, auto) {
    if(err) { return handleError(res, err); }
    if(!auto) { return res.send(404); }
    auto.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}