angular.module('video-player')




.component('app', {
  controller: function ($scope) {
    this.videos = window.exampleVideoData;
    this.video = this.videos[0];



  },
  templateUrl: './src/templates/app.html'



});
