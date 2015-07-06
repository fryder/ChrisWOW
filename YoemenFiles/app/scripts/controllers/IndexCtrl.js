define(['WOWMotorCycles','services/bikeSearchService'], function(WOWMotorCycles) {

	'use strict';
	WOWMotorCycles.controller('IndexCtrl', function($scope,$location,bikeSearchService) {
		$scope.welcomeText = 'Welcome to your WOWMotorCycles page';
		$scope.bikes=bikeSearchService.getBikesFromStore;
		$scope.submit=function(){
			$location.path( "/search" );
		};
	});
});
