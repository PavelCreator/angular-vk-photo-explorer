'use strict';

angular.module('apiSvc', [])
  .service('apiService', ["$http", "$rootScope", "$stateParams",
    function ($http, $rootScope, $stateParams) {
      var vm = this;
      var redirect_uri = location.origin + location.pathname;

      this.getAccessToken = function (code) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getAccessToken.php',
          data: {
            "redirect_uri": redirect_uri,
            "code": code
          }
        })
      };

      this.getUserInfo = function () {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getUserInfo.php',
          data: {
            "methodName": 'users.get',
            "user_ids": localStorage.getItem('user_id')
          }
        })
      };

      this.getPhoto = function (owner_id, thumb_id) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getPhoto.php',
          data: {
            methodName: 'photos.getById',
            photos: owner_id + '_' + thumb_id,
            photo_sizes: "1",
            access_token: localStorage.getItem('access_token')
          }
        })
      };

      this.getPhotos = function (photoString) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getPhoto.php',
          data: {
            methodName: 'photos.getById',
            photos: photoString,
            photo_sizes: "1",
            access_token: localStorage.getItem('access_token')
          }
        })
      };

      this.getAlbumsList = function () {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getAlbumsList.php',
          data: {
            methodName: 'photos.getAlbums',
            access_token: localStorage.getItem('access_token')
          }
        })
      };

      this.getAlbum = function (aid) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getAlbum.php',
          data: {
            methodName: 'photos.get',
            owner_id: localStorage.getItem('user_id'),
            album_id: aid,
            photo_sizes: 1,
            access_token: localStorage.getItem('access_token')
          }
        })
      };

      this.getAlbumOffset = function (aid, offset_num) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getAlbumOffset.php',
          data: {
            methodName: 'photos.get',
            offset: offset_num*48,
            count: 48,
            owner_id: localStorage.getItem('user_id'),
            album_id: aid,
            photo_sizes: 1,
            access_token: localStorage.getItem('access_token')
          }
        })
      };

    }]);