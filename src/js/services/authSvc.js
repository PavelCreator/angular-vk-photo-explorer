'use strict';

angular.module('authSvc', [])
  .factory('authService', ["$http", "$rootScope",
    function ($http, $rootScope) {
      return {
        checkOutdateToken: function (response) {
          if (response.data.error) {
            window.location = location.origin + location.pathname;
          }
        }
      }
    }]);