angular.module('app').controller('app_pluginslist', app_pluginslist);
function app_pluginslist($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.refresh = function(){
        window.location.reload();
        }
}