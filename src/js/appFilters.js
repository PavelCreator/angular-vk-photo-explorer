'use strict';

angular.module('appFilters', [])
  .filter('secondsToDateTime', [function () {
    return function (seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  }])
  .filter('unsafe', ['$sce', function ($sce) {
    return function (val) {
      return $sce.trustAsHtml(val);
    };
  }])
  .filter('reverse', function () {
    return function (items) {
      return items.slice().reverse();
    };
  });