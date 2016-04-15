'use strict';

angular.module('albumViewCtrl', ['ngAnimate', 'ui.bootstrap'])

  .controller('albumViewController', ["$scope", "authService", "apiService", "albumViewService", '$state', '$http',
    function ($scope, authService, apiService, albumViewService, $state, $http) {

      $scope.aid = $state.params.aid;
      $scope.atitle = $state.params.atitle;

      apiService.getAlbum($scope.aid)
        .then(function (response, status) {
          authService.checkOutdateToken(response);

          $scope.images = response.data.response;

          for (var i = 0; i < $scope.images.length; i++) {
            $scope.images[i].popover = albumViewService.createPopoverTable($scope.images[i]);
          }

          console.log($scope.images);
        });
    }])