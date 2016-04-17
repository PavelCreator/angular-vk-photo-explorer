'use strict';

angular.module('albumViewCtrl', ['ngAnimate', 'ui.bootstrap'])

  .controller('albumViewController', ["$rootScope", "$scope", "authService", "apiService", "albumViewService", '$state', '$http',
    function ($rootScope, $scope, authService, apiService, albumViewService, $state, $http) {
      $rootScope.section = 'view';

      $scope.aid = $state.params.aid;
      $scope.atitle = $state.params.atitle;

      $scope.myPagingFunction = function () {
        console.log("scroll");
      }

      //Get album with infinite scrolling
      $scope.images = [];

      var photoCounter = -1;
      $scope.flagEndPhotoDownload = false;

      $scope.getPhotos = function () {
        if ($scope.flagEndPhotoDownload) return;

        apiService.getAlbumOffset($scope.aid, ++photoCounter)
          .then(function (response, status) {
            authService.checkOutdateToken(response);

            var newImages = response.data.response;
            if (newImages.length < 48) {
              $scope.flagEndPhotoDownload = true;
            }
            if (newImages.length == 0) {
              return;
            }
            newImages = albumViewService.createPopoverTable(newImages);

            $scope.images = $scope.images.concat(newImages);
          });
      }
      $scope.getPhotos();

      //Get album without infinite scrolling
      /*
      apiService.getAlbum($scope.aid)
       .then(function (response, status) {
       authService.checkOutdateToken(response);

       $scope.images = response.data.response;

       for (var i = 0; i < $scope.images.length; i++) {
       $scope.images[i].popover = albumViewService.createPopoverTable($scope.images[i]);
       }
       });*/

    }])


