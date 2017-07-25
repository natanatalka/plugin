angular.module('app').controller('app_camera', app_camera);

function app_camera($scope, app) {
    'use strict';
    app.init($scope);
    var pictureSource;
    var destinationType;

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }

    function successCapturePhoto(imageData) {
        var imageBase64_1 = document.getElementById('imageBase64_1');
        imageBase64_1.style.display = 'block';
        imageBase64_1.src = "data:image/jpeg;base64," + imageData;
    }

    function successChoosePhoto(imageData) {
        var imageBase64_2 = document.getElementById('imageBase64_2');
        imageBase64_2.style.display = 'block';
        imageBase64_2.src = "data:image/jpeg;base64," + imageData;
    }

    function successCapturePhoroURI(imageURI) {
        var imageURI_1 = document.getElementById('imageURI_1');
        imageURI_1.style.display = 'block';
        imageURI_1.src = imageURI;
        alert(imageURI);
    }

    $scope.capturePhotoURI = function() {
        navigator.camera.getPicture(successCapturePhoroURI, onFail, {
            quality: 50,
            destinationType: destinationType.FILE_URI
        });
    }

    $scope.capturePhoto = function() {
        navigator.camera.getPicture(successCapturePhoto, onFail, {
            quality: 50,
            destinationType: destinationType.DATA_URL
        });
    }


    $scope.getPhoto = function() {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(successChoosePhoto, onFail, {
            quality: 50,
            destinationType: destinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });
    }
    
    $scope.getPhotoURI = function() {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(successChoosePhoto, onFail, {
            quality: 50,
            destinationType: destinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
        });
    }
    

    function onFail(message) {
        alert('Failed because: ' + message);
    }

}