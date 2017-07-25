angular.module('app').controller('app_touchid', app_touchid);
function app_touchid($scope, app) {
    'use strict';

        // app.init($scope);  
       
   $scope.verify = function (){
       

        if (window.plugins) {
             window.plugins.touchid.save("MyKey", "My Password");
                window.plugins.touchid.isAvailable(function() {
                window.plugins.touchid.has("MyKey", function() {
                window.plugins.touchid.verify("MyKey", " ",function() {
        alert("Success");
    }, function(){
        alert("Cancelled");
    });
        }, function() {
            alert("Touch ID available but no Password Key available");
        });
    }, function(msg) {
        alert("no Touch ID available on device");
    });
}
}
    
}