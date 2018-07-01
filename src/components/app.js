angular.module('video-player')
  .component('app', {
    controller: function ($scope, youTube) {
      this.result = (data) => {
        this.videos = data.items
      }
      this.newSearchQuery = '';
      this.video = this.videos[0];
      this.onClick = (index) => {
        console.log('Clicked', index);
        this.video = this.videos[index];
      };
    },
    templateUrl: 'src/templates/app.html'
  });
