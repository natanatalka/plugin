angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.pluginslist', {
        views: {
            app: {
                controller: 'app_pluginslist',
                templateProvider: function (app) {
                    return app.templateProvider('app.pluginslist');
                }
            }
        }
    }).state('app.touchid', {
        views: {
            app: {
                controller: 'app_touchid',
                templateProvider: function (app) {
                    return app.templateProvider('app.touchid');
                }
            }
        }
    }).state('app.ionickeyboard', {
        views: {
            app: {
                controller: 'app_ionickeyboard',
                templateProvider: function (app) {
                    return app.templateProvider('app.ionickeyboard');
                }
            }
        }
    }).state('app.inappbrowser', {
        views: {
            app: {
                controller: 'app_inappbrowser',
                templateProvider: function (app) {
                    return app.templateProvider('app.inappbrowser');
                }
            }
        }
    }).state('app.barcodescanning', {
        views: {
            app: {
                controller: 'app_barcodescanning',
                templateProvider: function (app) {
                    return app.templateProvider('app.barcodescanning');
                }
            }
        }
    }).state('app.securestorage', {
        views: {
            app: {
                controller: 'app_securestorage',
                templateProvider: function (app) {
                    return app.templateProvider('app.securestorage');
                }
            }
        }
    }).state('app.pdfpreview', {
        views: {
            app: {
                controller: 'app_pdfpreview',
                templateProvider: function (app) {
                    return app.templateProvider('app.pdfpreview');
                }
            }
        }
    }).state('app.camera', {
        views: {
            app: {
                controller: 'app_camera',
                templateProvider: function (app) {
                    return app.templateProvider('app.camera');
                }
            }
        }
    }).state('app.screenrotation', {
        views: {
            app: {
                controller: 'app_screenrotation',
                templateProvider: function (app) {
                    return app.templateProvider('app.screenrotation');
                }
            }
        }
    });
});