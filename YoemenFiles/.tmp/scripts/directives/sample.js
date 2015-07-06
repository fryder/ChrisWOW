define(['WOWMotorCycles'], function(WOWMotorCycles) {
	'use strict';

	WOWMotorCycles.directive('sample', function() {
		return {
			restrict: 'E',
			template: '<span>Sample</span>'
		};
	});
});
