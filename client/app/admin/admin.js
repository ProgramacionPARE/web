'use strict';

angular.module('pareApp')
  .config(function ($stateProvider) {
    $stateProvider
  		.state('admin', {
	    url: '/admin',
	    templateUrl: 'app/admin/admin.html',
	    controller: 'AdminCtrl',
		authenticate: true
      });
  });
  