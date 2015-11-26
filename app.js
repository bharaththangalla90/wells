   angular.module('underscore', []).factory('_', function() {
       return window._;
   });


   var codeathonapp = angular.module('codeathonapp', ['ngRoute', 'underscore', 'ngIdle', 'ui.bootstrap', 'ngAnimation']);
   (function() {
       'use strict';
       codeathonapp.config(['$routeProvider', 'uiRouters', 'KeepaliveProvider', myConfigFn]);

       function myConfigFn($routeProvider, uiRouters, KeepaliveProvider) {
           KeepaliveProvider.interval(10);

           $routeProvider.
           when(uiRouters.login, {
               templateUrl: uiRouters.directivesHtmlPath + '/login.html'
               
           }).
           when(uiRouters.dashboard, {
               templateUrl: uiRouters.directivesHtmlPath + '/dashboard.html',

           }).
           when(uiRouters.contests, {
               templateUrl: uiRouters.directivesHtmlPath + '/contests.html'
           }).
           when(uiRouters.users, {
               templateUrl: uiRouters.directivesHtmlPath + '/users.html'
           }).
           when(uiRouters.reports, {
               templateUrl: uiRouters.directivesHtmlPath + '/reports.html'
           }).
           when(uiRouters.help, {
               templateUrl: uiRouters.directivesHtmlPath + '/help.html'
           }).
           when(uiRouters.adminContextList, {
               templateUrl: uiRouters.directivesHtmlPath + '/manageContest-List.html',

           }).
           when(uiRouters.adminContextCreate, {
               templateUrl: uiRouters.directivesHtmlPath + '/createContest-01.html',

           }).
           when(uiRouters.adminContextCreateSub, {
               templateUrl: uiRouters.directivesHtmlPath + '/createContest-02.html',

           }).
           when(uiRouters.adminDomainList, {
               templateUrl: uiRouters.directivesHtmlPath + '/domian_list.html',

           }).
           when(uiRouters.adminTechList, {
               templateUrl: uiRouters.directivesHtmlPath + '/technology_list.html',

           }).
           when(uiRouters.manageLocations, {
               templateUrl: uiRouters.directivesHtmlPath + '/locations.html'
           }).
           when(uiRouters.manageHost, {
               templateUrl: uiRouters.directivesHtmlPath + '/host_list.html',

           }).
           when(uiRouters.manageRoles, {
               templateUrl: uiRouters.directivesHtmlPath + '/role_list.html',

           }).
           when(uiRouters.manageApis, {
               templateUrl: uiRouters.directivesHtmlPath + '/api.html'
           }).
           when(uiRouters.adminContext, {
               templateUrl: uiRouters.directivesHtmlPath + '/user_answers.html'
           }).
           when(uiRouters.multisites, {
               templateUrl: uiRouters.directivesHtmlPath + '/multisites_list.html',

           }).
           otherwise({
               redirectTo: uiRouters.login
           })
       }
       codeathonapp.run(['$rootScope', '$log', '$ajaxFactory', 'uiRouters', myRunFn]);

       function myRunFn($rootScope, $log, $ajaxFactory, uiRouters) {
           $log.debug('ng app started');
       }
   })();
