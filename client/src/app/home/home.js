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

.controller('HomeCtrl', function HomeController($window, $rootScope, $scope, $location, $dialog, $joggingAPIService) {

    $scope.joggingList = $scope.joggingList || [];
    var request = { "name": $scope.current.name };
    $joggingAPIService.GetJoggingList(request).success(function (response) {
        if (response !== null) {
            $scope.joggingList = response;
        }
    }).error(function (err) {
        alert(err);
    });

    $scope.addJogging = function () {
        $scope.current.EditResource = 0;
        $location.path("/add-jogging");
    };
    $scope.editJogging = function (joggingID) {
        $scope.current.EditResource = 1;
        $scope.current.joggingID = joggingID;
        $location.path("/add-jogging");
    };
    $scope.deleteJogging = function (joggingID, title) {

        $scope.openDialog({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            templateUrl: 'jogging/modal/modal.tpl.html',
            controller: ['$scope', '$location', 'dialog', function ($scope, $location, dialog) {
                $scope.title = 'Jogging ' + title + '.';
                $scope.message = 'Do you want to delete Jogging ' + title + ' ?';
                $scope.btn = true;
                $scope.btnlabel = 'ok';
                $scope.btnCancel = 'cancel';
                $scope.close = function () {
                    dialog.close();
                };
                $scope.ok = function () {
                    $joggingAPIService.DeleteJogging(joggingID).success(function (response) {
                        if (response !== null) {
                            dialog.close();
                            //$location.path("/RsRedirect");
                        }
                    }).error(function (err) {
                        alert(err);
                    });
                };

            }]
        });

    };
    $scope.openDialog = function (opts) {
        var d = $dialog.dialog(opts);
        return {
            dialog: d,
            promise: d.open()
        };
    };
});