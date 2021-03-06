/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/detalleTurnos', require('./api/detalleTurno'));
  app.use('/api/turnos', require('./api/turno'));
  app.use('/api/autos', require('./api/auto'));
  app.use('/api/estacionamientos', require('./api/estacionamiento'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/files', require('./components/files'));

  app.use('/auth', require('./auth'));
  
  app.use('/stats',require('./components/stats'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
