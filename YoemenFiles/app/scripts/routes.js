define([], function() {
	'use strict';
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
            },
            '/search': {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
            },
            '/searchInit/:bikeType': {
                templateUrl: 'views/searchInit.html',
                controller: 'IndexCtrl',
            },
            '/dealerInfo': {
                templateUrl: 'views/dealerInfo.html',
                controller: 'HomeCtrl',
            },
            '/accessories': {
                templateUrl: 'views/accessories.html',
                controller: 'HomeCtrl',
            },
            '/service': {
                templateUrl: 'views/Service.html',
                controller: 'HomeCtrl',
            },
            '/service/:make': {
                templateUrl: 'views/Service.html',
                controller: 'HomeCtrl',
            },
            '/service/:make/:model': {
                templateUrl: 'views/Service.html',
                controller: 'HomeCtrl',
            },
            '/bikeDetails/:refId':{
                templateUrl:'views/bikeDetails.html',
                controller:'bikeDetailsCtrl',
            }            
            
        }
    };
});