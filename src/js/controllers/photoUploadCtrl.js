'use strict';

angular.module('photoUploadCtrl', [])

  .controller('photoUploadController', ["$rootScope", "$scope", "authService", "apiService",
    function ($rootScope, $scope, authService, apiService) {

      $scope.selectAlbum = function(){
        $scope.albumSelected = false;
        apiService.getUploadServer($scope.currentAlbum)
          .then(function (response, status) {
            $scope.albumSelected = true;
            authService.checkOutdateToken(response);
            var upload_url = response.data.response.upload_url;
            $scope.upload_url = upload_url;
          });
      }

      apiService.getAlbumsList()
        .then(function (response, status) {
          authService.checkOutdateToken(response);
          $scope.albums = response.data.response;
        });

      $scope.catchFile = function (file) {
        /*console.log(file.file);*/
        $scope.status = 'Uploading...'
        var fileEncoded;
        var reader = new FileReader();
        reader.onload = function (readerEvt) {
          var binaryString = readerEvt.target.result;
          fileEncoded = btoa(binaryString);
          apiService.photoUpload($scope.upload_url, fileEncoded, file.file.name)
            .then(function (response, status) {
              apiService.photoSave(response.data)
                .then(function (response, status) {
                  document.getElementById(file.file.name).innerHTML = '<i class="fa fa-check green m3 ml5" aria-hidden="true"></i> <span class="ml-3 green">Loaded</span>';
                });
              });
        };
        reader.readAsBinaryString(file.file);
      }

    }])

