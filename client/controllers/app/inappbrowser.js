angular.module('app').controller('app_inappbrowser', app_inappbrowser);
function app_inappbrowser($scope, app) {
    'use strict';
    app.init($scope);
    
    var fileLink = ('http://google.com');
    
    $scope.inAppBrowser = function() {
    cordova.InAppBrowser.open(encodeURI(fileLink), "_blank", "location=no,toolbarposition=top,closebuttoncaption=Back,enableViewportScale=yes");
}
}