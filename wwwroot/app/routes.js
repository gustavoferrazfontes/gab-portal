(function () {
    'use strict';

    var app = angular.module('gab');

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'GLOBAL AZURE BOOTCAMP',
                templateUrl: 'pages/content.html',
                controller: 'contentCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }]);
})();
    