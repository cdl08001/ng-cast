angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      index: '<',
      onClick: '<'
    },
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoList.html'
  });
