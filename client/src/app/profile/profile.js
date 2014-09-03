angular.module('ngJogging.profile', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
    $stateProvider.state('profile', {
        url: '/profile',
    views: {
      "main": {
          controller: 'ProfileCtrl',
          templateUrl: 'profile/profile.tpl.html'
      }
    },
    data:{ pageTitle: 'User Profile' }
  });
})

.controller( 'ProfileCtrl', function ProfileCtrl( $scope ) {
 
});