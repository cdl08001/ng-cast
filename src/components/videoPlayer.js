angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<',
      index: '<',
      onClick: '<'
    },
    controller: function($scope) {
      // Create a function to see if a video was passed in.
      // If a video does not exist, set ng-src within iFrame to be 'Please wait'

    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
