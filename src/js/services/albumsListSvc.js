'use strict';

angular.module('albumsListSvc', [])
  .factory('albumsListService', [
    function () {
      return {
        photosString: function(albums){
          var photosString = '';
          for (var i = 0; i < albums.length; i++) {
            photosString += albums[i].owner_id + '_' + albums[i].thumb_id
            if (i !== albums.length - 1) {
              photosString += ','
            }
          }
          return photosString;
        },
        addAlbumThumbs: function(albums, albumsThumbs){
          for (var i = 0; i < albums.length; i++) {
            albums[i].thumb = albumsThumbs[i].sizes[1].src;
          }
          return albums;
        }
      }
    }]);