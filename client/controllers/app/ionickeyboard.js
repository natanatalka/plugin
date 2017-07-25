angular.module('app').controller('app_ionickeyboard', app_ionickeyboard);
function app_ionickeyboard($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.show = function(){
        cordova.plugins.Keyboard.show("Keyboard", "show", []);
       
    }
   
    $scope.close = function(){
        cordova.plugins.Keyboard.close();
    }

    
}