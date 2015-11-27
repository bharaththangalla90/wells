   angular.module('underscore', []).factory('_', function() {
       return window._;
   });


   var codeathonapp = angular.module('codeathonapp', ['ngRoute', 'underscore', 'ngIdle', 'ui.bootstrap', 'ngAnimate']);
   (function() {
       'use strict';
       codeathonapp.config(['$routeProvider', 'uiRouters', 'KeepaliveProvider', myConfigFn]);

       function myConfigFn($routeProvider, uiRouters, KeepaliveProvider) {
           KeepaliveProvider.interval(10);

           $routeProvider.
           when(uiRouters.login, {
               templateUrl: uiRouters.directivesHtmlPath + '/login.html'               
           }).
           otherwise({
               redirectTo: uiRouters.login
           });
       }
       codeathonapp.run(['$rootScope', '$log', '$ajaxFactory', 'uiRouters', myRunFn]);

       function myRunFn($rootScope, $log, uiRouters) {
           $log.debug('app started.');           
       }
   })();
