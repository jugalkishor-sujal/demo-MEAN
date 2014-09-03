angular.module('ngJogging.register', [
  'ui.router',
  'joggingAPIService'
])

.config(function config($stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        views: {
            "main": {
                controller: 'RegisterCtrl',
                templateUrl: 'register/register.tpl.html'
            }
        },
        data: { pageTitle: 'Register' }
    });
})

.controller('RegisterCtrl', function RegisterController($window, $rootScope, $scope, $location, $joggingAPIService) {
   
    $scope.name = $scope.name || '';
    $scope.password = $scope.password || '';
    $scope.current.name = $scope.current.name ||'';
    $scope.doRegister = function () {
        if ($scope.password === $scope.password2) {
            var request = { "name": $scope.name, "password": $scope.password };
            console.log(request);
            $joggingAPIService.CheckLogin(request).success(function (response) {
                if (response !== null) {
                    if (response.result === 1) {
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
        }
        else {
            $scope.error = "Both password not match!!";
            $scope.password = "";
            $scope.password2 = "";
        }
    };
    });