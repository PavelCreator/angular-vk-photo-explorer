'use strict';

angular.module('albumsListCtrl', [])

  .controller('albumsListController', ["$scope", "authService", "apiService", "albumsListService",
    function ($scope, authService, apiService, albumsListService) {

      apiService.getUserInfo()
        .then(function (response, status) {
          authService.checkOutdateToken(response);

          var userName = response.data.response[0].first_name;
          localStorage.setItem('userName', userName);
          $scope.userName = userName;
        });

      apiService.getAlbumsList()
        .then(function (response, status) {
          authService.checkOutdateToken(response);

          $scope.albums = response.data.response;
          var photosString = albumsListService.photosString(response.data.response);

          apiService.getPhotos(photosString)
            .then(
              function (response, status) {
                var albumsThumbs = response.data.response;
                $scope.albums = albumsListService.addAlbumThumbs($scope.albums, albumsThumbs);
                console.log($scope.albums);
              }
            )

        });

    }])