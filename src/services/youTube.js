angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(newSearchQuery) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: 'Star Wars',
        part: 'snippet',
        videoEmbeddable: 'true',
        maxResults: 5,
        type: 'video',
        key: window.YOUTUBE_API_KEY
      }
    })
  }
});
