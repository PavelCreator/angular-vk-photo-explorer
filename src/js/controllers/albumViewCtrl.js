'use strict';

angular.module('albumViewCtrl', ['ngAnimate', 'ui.bootstrap'])

  .controller('albumViewController', ["$scope", "authService", "apiService", "albumViewService", '$state', '$http',
    function ($scope, authService, apiService, albumViewService, $state, $http) {

      $scope.aid = $state.params.aid;
      $scope.atitle = $state.params.atitle;
      
      $scope.myPagingFunction = function(){
        console.log("qazwsx");
      }

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
  .controller('DemoController', function ($scope, $http) {
    var Reddit = function () {
      this.items = [];
      this.busy = false;
      this.after = '';
    };

    Reddit.prototype.nextPage = function () {
      if (this.busy) return;
      this.busy = true;

      var url = "https://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
      $http.jsonp(url).success(function (data) {
        var items = data.data.children;
        for (var i = 0; i < items.length; i++) {
          this.items.push(items[i].data);
        }
        this.after = "t3_" + this.items[this.items.length - 1].id;
        this.busy = false;
      }.bind(this));
    };
    $scope.reddit = new Reddit();
  });
