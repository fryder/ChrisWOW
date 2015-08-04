define(['WOWMotorCycles','services/bikeSearchService'], function (WOWMotorCycles) {

      'use strict';
      WOWMotorCycles.controller('SearchCtrl', function ($scope, bikeSearchService,$routeParams) {
            $scope.homePageText = 'This is your homepage';
            $scope.bikeData = bikeSearchService.getBikes;

            $scope.sort = {
                  column: '',
                  descending: false
            };
            $scope.changeSorting = function (column) {

                  var sort = $scope.sort;

                  if (sort.column == column) {
                        sort.descending = !sort.descending;
                  } else {
                        sort.column = column;
                        sort.descending = false;
                  }
            };
      });
});
