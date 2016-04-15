'use strict';

angular.module('albumViewSvc', [])
  .factory('albumViewService', ["$filter",
    function ($filter) {
      return {
        createPopoverTable: function(image){
          var table =
              '<table class="photo-details--table">'+
                '<tr><td class="photo-details--col1">File name:</td><td>'+image.owner_id+'_'+image.pid+'</td></tr>'+
                '<tr><td class="photo-details--col1">Created:</td><td>'+$filter('date')(image.created*1000, "MM/dd/yyyy 'at' HH:mm")+'</td></tr>'+
                '<tr><td class="photo-details--col1">Caption:</td><td>'+image.text+'</td></tr>'+
              '</table>';
          return table;
        }
      }
    }]);