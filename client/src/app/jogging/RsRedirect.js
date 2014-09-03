angular.module('ngJogging.RsRedirect', [
  'ui.router'
])

.config(function config($stateProvider) {
    $stateProvider

    .state('RsRedirect', {
        url: '/RsRedirect',
        views: {
            "main": {
                controller: 'RsRedirectCtrl',
                templateUrl: 'jogging/RsRedirect.tpl.html'
            }
        },
        data: { pageTitle: 'RsRedirect' }
    });
})

.controller('RsRedirectCtrl', function ($scope, $window, $log, $location) {
    //if ($scope.current.sender === 1) {
    $location.path('/home');
   // } else if ($scope.current.sender === 2) {
    //    $location.path('/office/resource-library/add-resource');
   // } 
});