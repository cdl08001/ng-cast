angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      index: '<'
    },
    controller: function($scope) {
    },
    templateUrl: 'src/templates/videoList.html'
  });
