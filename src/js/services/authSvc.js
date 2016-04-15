'use strict';

angular.module('authSvc', [])
  .factory('authService', ["$http", "$rootScope",
    function ($http, $rootScope) {
      return {
        checkOutdateToken: function (response) {
          if (response.data.error) {
            if (response.data.error.error_code) {
              if (response.data.error.error_code == 5) {
                localStorage.clear();
                window.location = location.origin + location.pathname;
              }
            }
          }
        }
      }
    }]);