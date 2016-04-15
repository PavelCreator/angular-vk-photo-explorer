'use strict';

angular.module('photoViewCtrl', ['ngAnimate', 'ui.bootstrap'])

  .controller('photoViewController', ["$scope", "authService", "apiService", "albumViewService", "photoViewService", '$state', '$http', '$sce',
    function ($scope, authService, apiService, albumViewService, photoViewService, $state, $http, $sce) {

      var pid = $state.params.pid;
      $scope.aid = $state.params.aid;
      $scope.atitle = $state.params.atitle;

      $scope.photo = {};
      $scope.photo.name = pid;

    apiService.getPhotos(pid)
        .then(function (response, status) {
          authService.checkOutdateToken(response);

          var image = response.data.response[0];
          $scope.photo.sizes = image.sizes;
          $scope.photo.description = $sce.trustAsHtml(photoViewService.createTable(image));
          $scope.photo.imageInAllSizes = $sce.trustAsHtml(photoViewService.createImageInAllSizes(image));
          console.log($scope.photo.sizes);
        });
    }])