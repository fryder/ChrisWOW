define(['WOWMotorCycles', 'services/sellBikeEmailService','bootstrap'], function (WOWMotorCycles) {

    'use strict';
    WOWMotorCycles.controller('sellBikeCtrl', function ($scope, $location, $window, sellBikeEmailService) {

        $scope.isMailNotSent = true;
       
          $scope.contactPreference = {
                           name:"Email"
                };
        $scope.submit = function () {
            // function (senderEmail,this.Year,this.Make,this.Model,this.Miles,this.Price,this.Name,this.PhNo)
            var link = "mailto:buyers@wowmotorcycles.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Quote Request from Mobile site")
             + "&body=" + escape(this.senderEmail + this.year + this.make + this.model + this.miles + this.price + this.name + this.phNo);


            //window.location.href = link;

            sellBikeEmailService.async(this.senderEmail, this.year, this.make, this.model, this.miles, this.price, this.name, this.phNo, this.contactPreference,this.comment).then(function (d) {


                $scope.result = angular.fromJson(d);

                if ($scope.result == 'success') {
                    $scope.isMailNotSent = false;
                }

            });

        };
    });
});
