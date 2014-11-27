/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
});


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Administrador',
    email: 'admin@pare.com.mx',
    password: '5UxM0k'
  }, function() {
      console.log('Admin');
    }
  );
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Magdalena',
    email: 'magdalena@pare.com.mx',
    password: 'Ib1EN0T]7E;R2o-'
  }, function() {
      console.log('Magdalena');
    }
  );
});
