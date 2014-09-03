angular.module('ngJogging.add-jogging', [
  'ui.router',
  'joggingAPIService'
])

.config(function config( $stateProvider ) {
    $stateProvider.state('add-jogging', {
        url: '/add-jogging',
    views: {
      "main": {
          controller: 'JoggingCtrl',
          templateUrl: 'jogging/add-jogging.tpl.html'
      }
    },
    data:{ pageTitle: 'Jogging Details' }
  });
})

.controller('JoggingCtrl', function JoggingController($window, $rootScope, $scope, $location, $joggingAPIService) {
    $scope.Joggings = $scope.Joggings || {};
    $scope.openDialog = function (opts) {
        var d = $dialog.dialog(opts);
        return {
            dialog: d,
            promise: d.open()
        };
    };
    
    
    if ($scope.current.EditResource === 1) {
        var request = $scope.current.joggingID;
        $joggingAPIService.GetJogging(request).success(function (response) {
            if (response !== null) {
                alert(response.date);
                $scope.Joggings = response;
            }
        }).error(function (err) {
            alert(err);
        });
    }
    else {
        $scope.Joggings = {};
    }
    $scope.back = function () {
        $location.path("/home");
    };    
    $scope.save = function () {
        $scope.Joggings.name = $scope.current.name;
        if ($scope.current.EditResource === 1) {
            $joggingAPIService.UpdateJogging($scope.current.joggingID, $scope.Joggings).success(function (response) {
                if (response !== null) {
                    alert(response.message);
                    $location.path("/home");
                }
            }).error(function (err) {
                alert(err);
            });
        }
        else {
            $joggingAPIService.AddJogging($scope.Joggings).success(function (response) {
                if (response !== null) {
                    alert(response.message);
                    $location.path("/home");
                }
            }).error(function (err) {
                alert(err);
            });
        }
    };
});