'use strict';

angular.module('scrollyDrct', [])

  .directive('scrolly', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var raw = element[0];
        var elemHeight = document.documentElement.clientHeight - 210;
        $(element[0]).height(elemHeight);

        element.bind('scroll', function () {
          if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
            scope.$apply(attrs.scrolly);
          }
        });
      }
    };
  });