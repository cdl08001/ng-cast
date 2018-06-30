angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
