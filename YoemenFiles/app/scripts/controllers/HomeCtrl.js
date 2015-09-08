define(['WOWMotorCycles'], function(WOWMotorCycles) {

	'use strict';
	WOWMotorCycles.controller('HomeCtrl', function($scope,$rootScope) {
		$scope.homePageText = 'This is your homepage';
		$rootScope.bikeType='all';
	});
});
