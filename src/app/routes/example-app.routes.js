/**
 * Reporting Routes
 * @namespace Modules
 * @author Betsy Dupuis
 */

'use strict';
angular
    .module('app.example')
    .config(function($stateProvider, $urlRouterProvider, assets) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: assets.templates + '/app/index.layout.html',
            })
            .state('example', {
                url: '/example',
                templateUrl: assets.templates + '/app/example.layout.html',
            });
    });