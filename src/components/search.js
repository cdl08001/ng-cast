angular.module('video-player')
  .component('search', {
    bindings: {
      newSearchQuery: '<',
      result: '<'
    }
    controller: function($scope) {


    },
    templateUrl: 'src/templates/search.html'
  });
