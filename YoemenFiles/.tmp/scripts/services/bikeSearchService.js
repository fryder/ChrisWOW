define(['WOWMotorCycles'], function(WOWMotorCycles) {
	'use strict';

	WOWMotorCycles.service('bikeSearchService', function() {
		  var bikesList = [];
		  this.getBikesFromStore = function() {
			  var bikes = [{'refid': '50676', 'year': '2009', 'make': 'HONDA', 'model': 'BIG RED MUV700', 'CC': '700', 'miles': '0', 'color': 'RED', 'price': 'In Transit'},
				  {'refid': '41925', 'year': '2008', 'make': 'HONDA', 'model': 'BUDDY 125', 'CC': '125', 'miles': '9249', 'color': 'BLU', 'price': 'SOLD'},
				  {'refid': '50703', 'year': '2014', 'make': 'HONDA', 'model': 'CB500F', 'CC': '500', 'miles': '11870', 'color': 'BLK', 'price': 'SOLD'},
				  {'refid': '50703', 'year': '2014', 'make': 'kawasaki', 'model': 'CB500F', 'CC': '500', 'miles': '11870', 'color': 'BLK', 'price': '1500'},
				  {'refid': '50703', 'year': '2014', 'make': 'kawasaki', 'model': 'CB500F', 'CC': '500', 'miles': '11870', 'color': 'BLK', 'price': '1900'},
				  {'refid': '50703', 'year': '2014', 'make': 'BMW', 'model': 'CB500F', 'CC': '500', 'miles': '11870', 'color': 'BLK', 'price': '2500'},
				  {'refid': '40928', 'year': '1978', 'make': 'HONDA', 'model': 'CB750', 'CC': '750', 'miles': '39703', 'color': 'YLWPUR', 'price': '$1960'}];
		      return this.bikesList=bikes;
		  };
		
		  this.getBikes = function() {
		      return this.bikesList;
		  };
		
		  return {
		    getBikesFromStore: this.getBikesFromStore(),
		    getBikes: this.getBikes()
		  };
	});
});
