define(['WOWMotorCycles', 'services/bikeSearchService','angular-touch'], function (WOWMotorCycles) {

    'use strict';
    WOWMotorCycles.controller('bikeDetailsCtrl', function ($scope, bikeSearchService, $routeParams) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        var bikeList = bikeSearchService.getBikes;
        $scope.bike = {};
        var showBike = function () {
            for (var i = 1; i < 5; i++) {
                slides.push({
                    image: 'http://www.wowmotorcycles.com/productimages/' + $routeParams.refId + ' (' + i + ').JPG'
                });
            }

            for (var k in bikeList) {
                if (bikeList[k].refid == $routeParams.refId) {
                    $scope.bike = bikeList[k];
                }
            }
        };
        showBike();

    });
});
