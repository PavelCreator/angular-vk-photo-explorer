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
      .state('albumsList', {
        url: "/albums-list",
        templateUrl: "src/partials/albumsList.html",
        controller: 'albumsListController',
      })
      .state('albumView', {
        url: "/album/:aid/:title",
        templateUrl: "src/partials/albumView.html",
        controller: 'albumViewController',
      })
      .state('upload', {
        url: "/upload",
        templateUrl: "src/partials/albumsList.html",
        controller: 'albumsListController',
      })
  }]);