/* global paths */
require.config({
    baseUrl: '/scripts',
    paths: {
        angular: '../../bower_components/angular/angular',
        'angular-route': '../../bower_components/angular-route/angular-route',
        'angular-touch': '../../bower_components/angular-touch/angular-touch',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        jquery: '../../bower_components/jquery/dist/jquery',
        affix: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix',
        alert: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert',
        button: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button',
        carousel: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel',
        collapse: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse',
        dropdown: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown',
        tab: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab',
        transition: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition',
        scrollspy: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy',
        modal: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal',
        tooltip: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip',
        popover: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover',
        'es5-shim': '../../bower_components/es5-shim/es5-shim',
        json3: '../../bower_components/json3/lib/json3',
        moment: '../../bower_components/moment/moment',
        requirejs: '../../bower_components/requirejs/require',
        'angular-translate': '../../bower_components/angular-translate/angular-translate',
        'angular-ui-utils': '../../bower_components/angular-ui-utils/index',
        'angular-ui-event': '../../bower_components/angular-ui-event/dist/event',
        'angular-ui-mask': '../../bower_components/angular-ui-mask/dist/mask',
        'angular-ui-validate': '../../bower_components/angular-ui-validate/dist/validate',
        'angular-ui-indeterminate': '../../bower_components/angular-ui-indeterminate/dist/indeterminate',
        'angular-ui-uploader': '../../bower_components/angular-ui-uploader/dist/uploader',
        'angular-ui-scroll': '../../bower_components/angular-ui-scroll/dist/ui-scroll',
        'angular-ui-scrollpoint': '../../bower_components/angular-ui-scrollpoint/dist/scrollpoint',
        'angular-filter': '../../bower_components/angular-filter/dist/angular-filter',
        'ui-utils': '../../bower_components/ui-utils/index'
    },
    shim: {
        angular: {
            deps: [
                'jquery'
            ]
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        },
        bootstrap: {
            deps: [
                'jquery',
                'modal'
            ]
        },
        modal: {
            deps: [
                'jquery'
            ]
        },
        tooltip: {
            deps: [
                'jquery'
            ]
        },
        'angular-translate': {
            deps: [
                'angular'
            ]
        },
        'ui-utils': {
            deps: [
                'angular-ui-event',
                'angular-ui-mask',
                'angular-ui-validate',
                'angular-ui-indeterminate',
                'angular-ui-uploader'
            ]
        },
        'angular-ui-event': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-mask': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-indeterminate': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-validate': {
            deps: [
                'angular'
            ]
        },
        'angular-touch': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-scroll': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-scrollpoint': {
            deps: [
                'angular-ui-scroll'
            ]
        },
        'angular-ui-uploader': {
            deps: [
                'angular-ui-scroll'
            ]
        }
    },
    packages: [

    ]
});

if (paths) {
    require.config({
        paths: paths
    });
}

require([
        'angular',
        'WOWMotorCycles',
        'controllers/IndexCtrl'
    ],
    function() {
        'use strict';
        angular.bootstrap(document, ['WOWMotorCycles']);
    }
);
