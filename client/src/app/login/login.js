angular.module('ngJogging.login', [
  'ui.router',
  'joggingAPIService'
])

.config(function config($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        views: {
            "main": {
                controller: 'LoginCtrl',
                templateUrl: 'login/login.tpl.html'
            }
        },
        data: { pageTitle: 'Login' }
    });
})

.controller('LoginCtrl', function LoginController($window, $rootScope, $scope,  $location, $joggingAPIService) {
   
    $scope.name = $scope.name || '';
    $scope.password = $scope.password || '';
    $scope.current.name = $scope.current.name ||'';
    $scope.doLogin = function () {
        var request = { "name": $scope.name, "password": $scope.password };
        console.log(request);
        $joggingAPIService.CheckLogin(request).success(function (response) {
            if (response !== null) {
                if (response.result===1) {
                    $scope.current.name = $scope.name;
                    $location.path("/home");

                } else {
                    $scope.email = "";
                    $scope.password = "";
                    alert('Please Enter correct username/password');
                }
            }
        }).error(function (err) {
            alert(err);
        });
    };
    $scope.doNewRegister = function () {
        $location.path("/register");
    };
    });