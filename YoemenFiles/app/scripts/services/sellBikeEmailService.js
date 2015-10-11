define(['WOWMotorCycles'], function (WOWMotorCycles) {
    'use strict';

    WOWMotorCycles.service('sellBikeEmailService', function ($http) {

        var myService = {
            async: function (paramEmail,paramYear,paramMake,paramModel,paramMiles,paramPrice,paramName,paramPhNo) {
                // $http returns a promise, which has a then function, which also returns a promise
                var promise = $http.post("BikeSearch.aspx/sendMail", { senderEmail: paramEmail,year: paramYear,make: paramMake,model: paramModel,miles: paramMiles,price:paramPrice,name : paramName,phNo:paramPhNo }).then(function (response) {
                    return response.data.d;
                });
                // Return the promise to the controller
                return promise;
            },
        };
        return myService;
       
    });
});
