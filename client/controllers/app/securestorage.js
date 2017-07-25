angular.module('app').controller('app_securestorage', app_securestorage);
function app_securestorage($scope, app) {
    'use strict';
    app.init($scope);
    $scope.showGetCredentials = false;
    $scope.showClearAll = false;
    $scope.username = '';
    $scope.password = '';
    var keyUsername = 'username';
    var keyPassword = 'password';
    var usernameInput = document.getElementById('usernameInput');
    var passwordInput = document.getElementById('passwordInput');
    $scope.ss = new cordova.plugins.SecureStorage(function () {
    }, function (error) {
        console.log('Error ' + error);
    }, 'my_app');
    $scope.setCredentials = function (username, password) {
        $scope.ss.set(function (keyUsername) {
        }, function (error) {
            alert('Error ' + error);
        }, keyUsername, username);
        $scope.ss.set(function (keyPassword) {
        }, function (error) {
            alert('Error ' + error);
        }, keyPassword, password);
        $scope.showGetCredentials = true;
        $scope.showClearAll = true;
    };
    $scope.getCredentials = function () {
        $scope.ss.get(function (value) {
            $scope.username = value;
            $scope.$apply();
        }, function (error) {
            alert('Error ' + error);
        }, keyUsername);
        $scope.ss.get(function (value) {
            $scope.password = value;
            $scope.$apply();
        }, function (error) {
            alert('Error ' + error);
        }, keyPassword);
    };
    $scope.clearAll = function () {
        $scope.ss.clear(function () {
        }, function (error) {
            alert('Error, ' + error);
        });
        usernameInput.value = '';
        passwordInput.value = '';
        $scope.username = '';
        $scope.password = '';
        $scope.showGetCredentials = false;
        $scope.showClearAll = false;
    };
}