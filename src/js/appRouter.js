'use strict';

angular.module('appRouter', [])

  .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('auth', {
        url: "/",
        templateUrl: "src/partials/auth.html",
        controller: 'authController',
      })
  }]);