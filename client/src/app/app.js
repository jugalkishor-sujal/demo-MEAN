angular.module( 'ngJogging', [
  'templates-app',
  'templates-common',
  'ngJogging.login',
  'ngJogging.home',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {
})
.constant('supplementalApiUri', 'http://localhost:2100/')//local
.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $log, $window) {
    $scope.loginCheck = function () {
        if ($location.path() === '/login') {
            $('#header').addClass('hide');
            $('#left-panel').addClass('hide');
        }
        else {
            $('#header').removeClass('hide');
            $('#left-panel').removeClass('hide');
        }
    };
    $rootScope.current = {};

    if ($window.localStorage.getItem('current')) {
        if ($window.localStorage.getItem('current') === 'undefined') {
            $rootScope.current = {};
        } else {
            $rootScope.current = JSON.parse($window.localStorage.getItem('current'));
        }
    }
    $rootScope.$watch('current', function (new_value, old_value) {
        if (new_value !== old_value) {
            $window.localStorage.setItem('current', JSON.stringify($rootScope.current));
        }
    }, true);
    $scope.logCurrent = function () {
        $log.debug($rootScope.current);
    };
    $scope.localStorage = function () {
        $log.debug(JSON.parse($window.localStorage.current));
    };
    
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngJogging' ;
    }
  });
});