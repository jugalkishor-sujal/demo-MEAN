angular.module('joggingAPIService', [

]).factory('$joggingAPIService', [
    '$http', 'supplementalApiUri',
    function ($http, supplementalApiUri) {
        serverUrl = supplementalApiUri;

        return {
            test: function (request) {
                return $http({
                    method: 'GET',
                    url: serverUrl,
                    data: request
                });
            },
            CheckLogin: function (requestPayLoad) {
                alert(serverUrl + "users/login");
                return $http({
                    method: 'POST',
                    url: serverUrl + "users/login",
                    data: requestPayLoad
                });
            },
            GetJoggingList: function (requestPayLoad) {
                return $http({
                    method: 'POST',
                    url: serverUrl + "joggings/list",
                    data: requestPayLoad
                });
            },
            GetUserFiles: function (Message) {
                //var requestData = JSON.parse(Message);
                var response = {};
                return $http({
                    method: 'POST',
                    url: serverUrl + "user_filesList",
                    data: Message
                });
                //    .then(function (result) {
                //    response = result;
                //    //return response;
                //}, function (error) {
                //    response = error;
                    
                //});
                //return response;
            }
        };
    } ]);