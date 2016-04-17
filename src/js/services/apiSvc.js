'use strict';

angular.module('apiSvc', [])
  .service('apiService', ["$http", "$rootScope", "$stateParams", "$base64",
    function ($http, $rootScope, $stateParams, $base64) {
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
            offset: offset_num * 48,
            count: 48,
            owner_id: localStorage.getItem('user_id'),
            album_id: aid,
            photo_sizes: 1,
            access_token: localStorage.getItem('access_token')
          }
        })
      };

      this.getUploadServer = function (aid) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/getUploadServer.php',
          data: {
            methodName: 'photos.getUploadServer',
            album_id: aid,
            access_token: localStorage.getItem('access_token')
          }
        })
      };


      this.photoUpload = function (upload_url, file, file_name) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/photoUpload.php',
          data: {
            file1: file,
            url: upload_url,
            file_name: file_name
          }
        })
      };

      this.photoSave = function (responseData) {
        return $http({
          method: 'POST',
          url: redirect_uri + 'api/photoSave.php',
          data: {
            methodName: 'photos.save',
            album_id: responseData.aid,
            server: responseData.server,
            photos_list: responseData.photos_list,
            hash: responseData.hash,
            access_token: localStorage.getItem('access_token')
          }
        })
      };

    }]);