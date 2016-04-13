'use strict';

angular.module('authCtrl', [])

  .controller('authController', ["$rootScope", "$scope", "apiService",
    function ($rootScope, $scope, apiService) {

      $scope.step = 1;

      $scope.step1 = function () {
        $scope.step = 2;
        apiService.authStep1($scope.email, $scope.password);
      };

      $scope.step2 = function () {
        apiService.authStep2($scope.authCode)
          .then(function (response, status) {
            console.log("response.data =", response.data);
          });
      };

    }])