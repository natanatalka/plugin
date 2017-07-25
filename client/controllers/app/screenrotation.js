angular.module('app').controller('app_screenrotation', app_screenrotation);
function app_screenrotation($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.portraitOrientation = function(){
     
    alert(screen.orientation);
        
  //    window.screen.orientation.lock('landscape');
    }
}