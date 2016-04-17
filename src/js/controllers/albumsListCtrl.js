'use strict';

angular.module('albumsListCtrl', [])

  .controller('albumsListController', ["$rootScope", "$scope", "authService", "apiService", "albumsListService",
    function ($rootScope, $scope, authService, apiService, albumsListService) {
      $rootScope.section = 'view';

      if (localStorage.getItem('userName')) {
        $scope.userName = localStorage.getItem('userName');
      } else {
        apiService.getUserInfo()
          .then(function (response, status) {
            authService.checkOutdateToken(response);

            var userName = response.data.response[0].first_name;
            localStorage.setItem('userName', userName);
            $scope.userName = userName;
          });
      }

      apiService.getAlbumsList()
        .then(function (response, status) {
          authService.checkOutdateToken(response);

          var albums = response.data.response;
          var photosStringResults = albumsListService.photosString(response.data.response);
          var photosString = photosStringResults[0];
          //photosStringSync needed to fix empty album bug
          var photosStringSync = photosStringResults[1];

          apiService.getPhotos(photosString)
            .then(function (response, status) {
                authService.checkOutdateToken(response);

                var albumsThumbs = response.data.response;
                albums = albumsListService.addAlbumThumbs(albums, albumsThumbs, photosStringSync);
                $scope.albums = albums;
                console.log($scope.albums);
              }
            )

        });

    }])