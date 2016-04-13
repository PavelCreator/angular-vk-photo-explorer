'use strict';

angular.module('authCtrl', [])

  .controller('authController', ["$rootScope", "$scope", "dataService",
    function ($rootScope, $scope, dataService) {

/*      dataService.auth(1, 2)
        .then(function (response, status) {
          console.log("response.data =", response.data);
        });*/

      $scope.submit = function () {
        console.log("$scope.email =", $scope.email);
        console.log("$scope.password =", $scope.password);
        dataService.auth($scope.email, $scope.password)
          .then(function (response, status) {
            console.log("response.data =", response.data);
          });
      };
    }])