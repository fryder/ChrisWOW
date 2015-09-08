define(['WOWMotorCycles','services/bikeSearchService'], function(WOWMotorCycles) {

	'use strict';
	WOWMotorCycles.controller('IndexCtrl', function($scope,$location,bikeSearchService,$routeParams,$rootScope) {
		$scope.selectedMake='';
		$scope.selectedModel='';
		$scope.welcomeText = 'Welcome to your WOWMotorCycles page';
		$scope.bikes=bikeSearchService.getBikesFromStore;
		$rootScope.bikeType=$routeParams.bikeType;
		$scope.submit=function(){
			$location.path( "/search");
		};
	});
});
