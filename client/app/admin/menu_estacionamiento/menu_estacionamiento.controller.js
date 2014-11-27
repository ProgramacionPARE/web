'use strict';

angular.module('pareApp')
  .controller('MenuEstacionamientoCtrl', function ($scope,$location) {
  	$scope.urlMenu  = $location.path().split("/")[3];
  	
  	$scope.setActive = function(active){
  		$scope.urlMenu = active;
  	}
  });
