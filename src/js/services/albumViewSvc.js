'use strict';

angular.module('albumViewSvc', [])
  .factory('albumViewService', ["$filter",
    function ($filter) {
      return {
        createPopoverTable: function(images){
          for (var i = 0; i < images.length; i++) {
              images[i].src = images[i].sizes[1].src;
              images[i].popover =
                '<table class="photo-details--table">'+
                  '<tr><td class="photo-details--col1">File name:</td><td>'+images[i].owner_id+'_'+images[i].pid+'</td></tr>'+
                  '<tr><td class="photo-details--col1">Created:</td><td>'+$filter('date')(images[i].created*1000, "MM/dd/yyyy 'at' HH:mm")+'</td></tr>'+
                  '<tr><td class="photo-details--col1">Caption:</td><td>'+images[i].text+'</td></tr>'+
                '</table>';
            }
          return images;
        }
      }
    }]);