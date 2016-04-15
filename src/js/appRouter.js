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
        url: "/album/:aid&:atitle",
        templateUrl: "src/partials/albumView.html",
        controller: 'albumViewController',
      })
      .state('photoView', {
        url: "/photo/:aid&:atitle/:pid",
        templateUrl: "src/partials/photoView.html",
        controller: 'photoViewController',
      })
      .state('upload', {
        url: "/upload",
        templateUrl: "src/partials/albumsList.html",
        controller: 'albumsListController',
      })
  }]);