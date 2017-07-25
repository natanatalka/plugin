angular.module('app').controller('app_pdfpreview', app_pdfpreview);

function app_pdfpreview($scope, app) {
    'use strict';
    app.init($scope);
    $scope.filePath = '';
    $scope.showViewPdf = false;
    var fileURL, path;
    var fileTransfer = new FileTransfer();
    var uri = encodeURI('http://www.axmag.com/download/pdfurl-guide.pdf');
    var platform = device.platform;
    
    $scope.getURI = function(platform){
        switch (platform) {
            case 'Android':{
                path = cordova.file.externalDataDirectory;
                fileURL = encodeURI(cordova.file.externalDataDirectory  + 'app.pdf');
                break;
            }
            case 'IOS': {
                path = cordova.file.documentsDirectory;
                fileURL = encodeURI(cordova.file.documentsDirectory + 'app.pdf');
            }
        }
    };

    $scope.downloadPDFfile = function() {
        fileTransfer.download(uri, getURI(platform), function(entry) {
            $scope.filePath = fileURL;
            $scope.showViewPdf = true;
            $scope.$apply();

        }, function(error) {
            alert('download error source ' + error.source);
            alert('download error target ' + error.target);
            alert('download error code' + error.code);
        }, false, {});
    };

    $scope.viewPdfFile = function() {
        window.plugins.PdfViewer.showPdf('app.pdf', 'Title', true);
    }

    $scope.deleteFile = function() {
        var filename = "app.pdf";

        window.resolveLocalFileSystemURL(path, function(dir) {
            dir.getFile(filename, {create: false}, function(fileEntry) {
                fileEntry.remove(function() {
                    $scope.showViewPdf = false;
                    $scope.$apply();
                }, function(error) {}, function() {});
            });
        });

    };
}