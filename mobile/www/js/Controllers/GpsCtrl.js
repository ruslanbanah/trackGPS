/**
 * Created by boom on 3/13/15.
 */
APP.controller('GpsCtrl', ['$scope', '$ionicPlatform', '$location', '$cordovaGeolocation',
    function ($scope, $ionicPlatform, $location, $cordovaGeolocation) {

        // init gps array
        $scope.whoiswhere = [];
        $scope.basel = {lat: 47.55633987116614, lon: 7.576619513223015};
        // check login code
        $ionicPlatform.ready(function () {

            var watch = $cordovaGeolocation.watchPosition({ frequency: 1000 });

            watch.then(function() { /* Not  used */ },
                function(err) {
                    // An error occurred.
                },
                function(position) {
                    $scope.basel = {lat:position.coords.latitude,lon:position.coords.longitude};
                    $scope.whoiswhere[0] = {"name": "My Marker1", "lat": $scope.basel.lat, "lon": $scope.basel.lon};
                    console.log('Positon : ',position);
                    //$scope.$apply("basel");
                });


            // some points of interest to show on the map
            // to be user as markers, objects should have "lat", "lon", and "name" properties
            $scope.whoiswhere = [
                {"name": "My Marker", "lat": $scope.basel.lat, "lon": $scope.basel.lon},
            ];

        });

    }]);
