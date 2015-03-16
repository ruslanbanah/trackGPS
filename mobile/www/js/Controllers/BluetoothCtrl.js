/**
 * Created by boom on 3/13/15.
 */
APP.controller('BluetoothCtrl', function($scope, $stateParams, $cordovaBluetoothSerial,$window) {

    if($window.bluetoothSerial){
        $scope.isBluetooth = false;
        $cordovaBluetoothSerial.available().then(
            function (data) {
                alert('Bluetooth is ok', data);
            },
            function (data) {
                alert('Bluetooth is undefined', data);
            }
        );
        $cordovaBluetoothSerial.isEnabled().then(
            function () {
                alert('Bluetooth is enabled');
            },
            function () {
                alert('Bluetooth is disabled');
            }
        );
    }else{
        $scope.isBluetooth = true;
        console.log('Bluetooth is not defined');
    }

});