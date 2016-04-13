'use strict';

angular.module('authCtrl', [])

  .controller('authController', ["$rootScope", "$scope", "apiService", "$http", '$location',
    function ($rootScope, $scope, apiService, $http, $location) {

/*      VK.init({
        apiId: 5414170
      });

      function authInfo(response) {
        if (response.session) {
          console.log(response);
          $rootScope.auth = true;
          $rootScope.mid = response.session.mid;
        } else {
          $rootScope.auth = false;
        }
      }

      VK.Auth.getLoginStatus(authInfo);*/

      console.log(location);

      if(location.search.indexOf('?code=')!= -1) {
        var code = location.search.split('?code=');
        code = code[1];
        console.log(code);
      }

      $rootScope.auth = false;

      $scope.login = function () {
        window.location = 'https://oauth.vk.com/authorize?client_id=5414170&display=page&redirect_uri=http://timer.dev/gallery&scope=photos&response_type=code';

/*        $http.get(
          'https://oauth.vk.com/authorize?client_id=5414170&display=page&redirect_uri=http://timer.dev&scope=friends&response_type=code&v=5.50'
        ).success(function (response) {
          console.log(response);
        });*/


/*        VK.Auth.login(authInfo);
        $rootScope.auth = true;*/
      }

      $scope.logout = function () {
                VK.Auth.logout();
      }

/*https://oauth.vk.com/authorize?client_id=5414170&display=page&redirect_uri=http://timer.dev&scope=friends&response_type=code&v=5.50*/


      /*      var methodName = 'groups.getMembers';
       var groupID = 76922753;
       var url = 'https://api.vk.com/method/' + methodName + '?group_id=' + groupID + '&callback=JSON_CALLBACK';

       $http.jsonp(url).success(function (response) {
       console.log(response);
       });*/


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