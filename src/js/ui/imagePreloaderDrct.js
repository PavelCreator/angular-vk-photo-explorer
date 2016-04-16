'use strict';

angular.module('imagePreloaderDrct', [])

  .directive('preloader', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (attrs.src == undefined) {
          //On Fail
          element.hide();
          element.addClass('spinner-show');
          element.parent().addClass('srcFailShow');
        } else {
          //On Load
          element.on('load', function () {
            element.removeClass('spinner-hide');
            element.addClass('spinner-show');
          });
          //When image is loaded
          scope.$watch('ngSrc', function () {
            element.removeClass('spinner-show');
            element.addClass('spinner-hide');
          });
        }
      }
    };
  })
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