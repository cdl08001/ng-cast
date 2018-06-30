angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<'
    },
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
