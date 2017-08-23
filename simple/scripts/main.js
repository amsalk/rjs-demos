require.config({
    paths: {
        angular:    '../../bower_components/angular/angular.min',
        lodash:     '../../bower_components/lodash/dist/lodash',
        jquery:     '../../bower_components/jquery/dist/jquery',
        domReady:   '../../bower_components/domReady/domReady'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        lodash: {
            exports: '_'
        }
    }
});


define('application',
    [
        'angular',
        'ctrls/CalcController'
    ], function (angular, CalcController) {
        var app = angular.module('app', []);
        app.controller('CalcController', CalcController);
        return app;
    });

define(['domReady!'], function (doc) {
    console.log('ready!');
    require([
        'application'
    ], function () {
        angular.bootstrap(doc.getElementsByTagName('body')[0], ['app']);
    });
});
