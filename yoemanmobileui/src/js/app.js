angular.module('WOWMotorcycles', [
  'ngRoute',
  'mobile-angular-ui',
  'WOWMotorcycles.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});