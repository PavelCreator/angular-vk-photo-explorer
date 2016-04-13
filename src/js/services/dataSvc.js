'use strict';

angular.module('dataSvc', [])
  .service('dataService', ["$http", "$rootScope", "$stateParams",
    function ($http, $rootScope, $stateParams) {
      var vm = this;
      this.auth = function (email, password) {
        return $http({
          method: 'POST',
          url: '/auth',
          data: {
            "email": email,
            "password": password
          }
        })
      };
    }]);