angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<',
      onClick: '<'
    },
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
