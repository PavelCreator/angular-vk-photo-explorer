'use strict';

angular.module('apiSvc', [])
  .service('apiService', ["$http", "$rootScope", "$stateParams",
    function ($http, $rootScope, $stateParams) {
      var vm = this;
      this.authStep1 = function (email, password) {
        return $http({
          method: 'GET',
          url: 'https://oauth.vk.com/authorize?client_id=5413873&display=popup&redirect_uri=http:%2F%2Ftimer.dev%2Fgallery'/*,
          url: 'https://oauth.vk.com/authorize',
          params: {
            'client_id': 	'5413873',
            'redirect_uri': 'http://timer.dev/gallery',
            'display':'popup'
          }*/
        })
/*        return $http({
          method: 'GET',
          url: '/auth'
        })*/
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