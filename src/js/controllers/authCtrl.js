'use strict';

angular.module('authCtrl', [])

  .controller('authController', ["$scope", "apiService", '$state',
    function ($scope, apiService, $state) {

      var authData = Object.create(null);
      authData.client_id = 5414170;
      authData.redirect_uri = location.origin + location.pathname;

      if (localStorage.getItem('access_token')) {
        $state.go("albumsList", {});
      }

      if (location.search.indexOf('?code=') != -1) {
        var codeArr = location.search.split('?code=');
        authData.code = codeArr[1];

        apiService.getAccessToken(authData.code)
          .then(function (response, status) {
            if (response.data.error == 'invalid_grant') {
              window.location = location.origin + location.pathname;
            } else {
              for (var key in response.data) {
                authData[key] = response.data[key];
              }
              delete authData.code;
              localStorage.setItem('access_token', authData.access_token);
              localStorage.setItem('user_id', authData.user_id);
              window.location = location.origin + location.pathname;
            }
          });
      }

      $scope.authLogicShow = true;

      $scope.login = function () {
        window.location =
          'https://oauth.vk.com/authorize?client_id=' + authData.client_id + '' +
          '&display=page&redirect_uri=' + authData.redirect_uri + '&scope=photos&response_type=code';
      }

    }])