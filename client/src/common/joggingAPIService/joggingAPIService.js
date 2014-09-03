angular.module('joggingAPIService', [

]).factory('$joggingAPIService', [
    '$http', 'supplementalApiUri',
    function ($http, supplementalApiUri) {
        serverUrl = supplementalApiUri;

        return {
           
            CheckLogin: function (requestPayLoad) {
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
            GetJogging: function (jogging_id) {                
                return $http({
                    method: 'GET',
                    url: serverUrl + "joggings/"+jogging_id,
                    data: {}
                });
               
            },
            DeleteJogging: function (jogging_id) {
                return $http({
                    method: 'DELETE',
                    url: serverUrl + "joggings/" + jogging_id,
                    data: {}
                });

            },
            UpdateJogging: function (jogging_id,payLoad) {
                return $http({
                    method: 'PUT',
                    url: serverUrl + "joggings/" + jogging_id,
                    data: payLoad
                });

            }
        };
    } ]);