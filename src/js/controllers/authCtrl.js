'use strict';

angular.module('authCtrl', [])

  .controller('authController', ["$rootScope", "$scope", "apiService", "auth", "$http", "store",
    function ($rootScope, $scope, apiService, auth, $http, store) {



      5414170



/*      var methodName = 'groups.getMembers';
      var groupID = 76922753;
      var url = 'https://api.vk.com/method/' + methodName + '?group_id=' + groupID + '&callback=JSON_CALLBACK';

      $http.jsonp(url).success(function (response) {
        console.log(response);
      });*/

      $scope.step = 1;

      $scope.logout = function () {

        auth.signout();
        store.remove('profile');
        store.remove('token');
        $scope.step = 1;
      }

      $scope.auth = auth;

/*      $scope.step1 = function () {
        $scope.step = 2;
        apiService.authStep1($scope.email, $scope.password);
      };

      $scope.step2 = function () {
        apiService.authStep2($scope.authCode)
          .then(function (response, status) {
            console.log("response.data =", response.data);
          });
      };*/

    }])