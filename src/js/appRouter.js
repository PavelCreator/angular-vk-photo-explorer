'use strict';

angular.module('appRouter', [])

  .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('auth', {
        url: "/",
        templateUrl: "build/partials/auth.html",
        controller: 'authController',
      })
      .state('albumsList', {
        url: "/albums-list",
        templateUrl: "build/partials/albumsList.html",
        controller: 'albumsListController',
      })
      .state('albumView', {
        url: "/album/:aid&:atitle",
        templateUrl: "build/partials/albumView.html",
        controller: 'albumViewController',
      })
      .state('photoView', {
        url: "/photo/:aid&:atitle/:pid",
        templateUrl: "build/partials/photoView.html",
        controller: 'photoViewController',
      })
      .state('upload', {
        url: "/upload",
        templateUrl: "build/partials/photoUpload.html",
        controller: 'photoUploadController',
      })
  }]);