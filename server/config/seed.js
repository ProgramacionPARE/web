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
///////////////////////////////////////
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Jorge Lazo',
    email: 'jlazo@pare.com.mx',
    password: '8114147909'
  }, function() {
      console.log('Lazo');
    }
  );
  
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Administrador',
    email: 'operaciones@pare.com.mx',
    password: '5257803003'
  }, function() {
      console.log('Operaciones');
    }
  );

   User.create({
    provider: 'local',
    role: 'admin',
    name: 'Administrador',
    email: 'contabilidad@pare.com.mx',
    password: '3817386560'
  }, function() {
      console.log('contabilidad');
    }
  );
//////////////////////////////////////////  
  
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Magdalena',
    email: 'magdalena@pare.com.mx',
    password: 'qfdhc3w2nd3o'
  }, function() {
      console.log('Magdalena');
    }
  );

  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Niños Heroes',
    email: 'nheroes@pare.com.mx',
    password: 'ru7e76krohv1'
  }, function() {
      console.log('NinosHeroes');
    }
  );

  User.create({
    provider: 'local',
    role: 'admin',
    name: 'BestBuy',
    email: 'bestbuy@pare.com.mx',
    password: '8cdfmd9pk89p'
  }, function() {
      console.log('BestBuy');
    }
  );

  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Inah a',
    email: 'inaha@pare.com.mx',
    password: 'ewyfkngov2dy',
  }, function() {
      console.log('INAH-A');
    }
  );

  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Inah b',
    email: 'inahb@pare.com.mx',
    password: 'u96hpbrsymnk',
  }, function() {
      console.log('INAh-B');
    }
  );

User.create({
    provider: 'local',
    role: 'admin',
    name: 'Pelvoux',
    email: 'pelvoux@pare.com.mx',
    password: '15g0w81tdjwj',
  }, function() {
      console.log('Monte Pelvoux');
    }
  );


});
