angular.module( 'ngJogging.home', [
  'ui.router',
  'joggingAPIService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Jogging List' }
  });
})

.controller('HomeCtrl', function HomeController($window, $rootScope, $scope, $location, $joggingAPIService) {
    $scope.joggingList = $scope.joggingList || [];
    var request = { "name": $scope.current.name };
    $joggingAPIService.GetJoggingList(request).success(function (response) {
        if (response !== null) {
            $scope.joggingList = response;
        }
    }).error(function (err) {
        alert(err);
    });
});