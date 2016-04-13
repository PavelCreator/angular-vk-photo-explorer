'use strict';

angular.module('apiSvc', [])
  .service('apiService', ["$http", "$rootScope", "$stateParams",
    function ($http, $rootScope, $stateParams) {
      var vm = this;
      this.authStep1 = function (email, password) {
        return $http({
          method: 'GET',
          url: '/auth'
        })
      };
      this.authStep2 = function (authCode) {
        return $http({
          method: 'POST',
          url: '/auth',
          data: {
            "authCode": authCode
          }
        })
      };
    }]);