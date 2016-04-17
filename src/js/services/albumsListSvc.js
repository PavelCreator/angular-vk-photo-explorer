'use strict';

angular.module('albumsListSvc', [])
  .factory('albumsListService', [
    function () {
      return {
        photosString: function(albums){
          var photosString = '';
          var sync = [];
          for (var i = 0; i < albums.length; i++) {
            if (albums[i].thumb_id == 0) sync.push(false);
            else sync.push(true);
            photosString += albums[i].owner_id + '_' + albums[i].thumb_id
            if (i !== albums.length - 1) photosString += ',';
          }
          return [photosString, sync];
        },
        addAlbumThumbs: function(albums, albumsThumbs, sync){
          var j = -1;
          for (var i = 0; i < albums.length; i++) {
            if (sync[i]) {
              j++;
              albums[i].thumb = albumsThumbs[j].sizes[1].src;
            }
          }
          return albums;
        }
      }
    }]);