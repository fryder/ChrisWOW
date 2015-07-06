define([], function() {
	'use strict';
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/views/home.html',
                controller: 'HomeCtrl',
            },
            '/search': {
                templateUrl: '/views/search.html',
                controller: 'SearchCtrl',
            },
            '/dealerInfo': {
                templateUrl: '/views/dealerInfo.html',
                controller: 'HomeCtrl',
            },
            '/accessories': {
                templateUrl: '/views/accessories.html',
                controller: 'HomeCtrl',
            },
            '/service': {
                templateUrl: '/views/Service.html',
                controller: 'HomeCtrl',
            }             
            
        }
    };
});