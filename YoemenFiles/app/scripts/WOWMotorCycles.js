define(['routes',
	'services/dependencyResolverFor',
	'i18n/i18nLoader!',
	'angular',
	'angular-route',
	'bootstrap',
	'angular-translate',
	'ui-utils','angular-touch','angular-ui-scrollpoint'],
	function(config, dependencyResolverFor, i18n) {
		'use strict';
		var WOWMotorCycles = angular.module('WOWMotorCycles', [
			'ngRoute',
			'pascalprecht.translate','ui.utils','ngTouch'
			]);
		WOWMotorCycles
			.config(
				['$routeProvider',
				'$controllerProvider',
				'$compileProvider',
				'$filterProvider',
				'$provide',
				'$translateProvider',
				function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $translateProvider) {

					WOWMotorCycles.controller = $controllerProvider.register;
					WOWMotorCycles.directive = $compileProvider.directive;
					WOWMotorCycles.filter = $filterProvider.register;
					WOWMotorCycles.factory = $provide.factory;
					WOWMotorCycles.service = $provide.service;

					if (config.routes !== undefined) {
						angular.forEach(config.routes, function(route, path) {
							$routeProvider.when(path, {templateUrl: route.templateUrl, resolve: dependencyResolverFor(['controllers/' + route.controller]), controller: route.controller, gaPageTitle: route.gaPageTitle});
						});
					}
					if (config.defaultRoutePath !== undefined) {
						$routeProvider.otherwise({redirectTo: config.defaultRoutePath});
					}

					$translateProvider.translations('preferredLanguage', i18n);
					$translateProvider.preferredLanguage('preferredLanguage');
				}]);
		return WOWMotorCycles;
	}
);
