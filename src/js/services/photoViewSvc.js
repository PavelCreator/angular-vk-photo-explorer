'use strict';

angular.module('photoUploadSvc', [])
  .factory('photoUploadService', ["$filter",
    function ($filter) {
      return {
        createTable: function(image){
          var table =
              '<table class="photo-details--table">'+
                '<tr><td class="photo-details--col1">File name:</td><td>'+image.owner_id+'_'+image.pid+'</td></tr>'+
                '<tr><td class="photo-details--col1">Created:</td><td>'+$filter('date')(image.created*1000, "MM/dd/yyyy 'at' HH:mm")+'</td></tr>'+
                '<tr><td class="photo-details--col1">Caption:</td><td>'+image.text+'</td></tr>'+
              '</table>';
          return table;
        },
        createImageInAllSizes: function(image){
          var imageInAllSizes = '';
          imageInAllSizes += '<img src="' + image.sizes[3].src + '" class="photo--image photo--image-size3" alt="">';
          imageInAllSizes += '<img src="' + image.sizes[4].src + '" class="photo--image photo--image-size4" alt="">';
          (image.sizes[7])
            ? (
              imageInAllSizes += '<img src="' + image.sizes[6].src + '" class="photo--image photo--image-size6" alt="">',
              imageInAllSizes += '<img src="' + image.sizes[7].src + '" class="photo--image photo--image-size7" alt="">'
            )
            : imageInAllSizes += '<img src="' + image.sizes[6].src + '" class="photo--image photo--image-size6 photo--image-size7" alt="">';
          return imageInAllSizes;
        }
      }
    }]);