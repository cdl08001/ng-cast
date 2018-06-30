angular.module('video-player')
  .component('app', {
    controller: function ($scope) {
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      this.onClick = (index) => {
        console.log('Clicked', index);
        this.video = this.videos[index];
      };
    },
    templateUrl: 'src/templates/app.html'
  });
