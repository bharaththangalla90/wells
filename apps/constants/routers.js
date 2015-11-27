(function() {
    'use strict';
    codeathonapp.constant('uiRouters', {
        filepath: 'apps/datafiles',
		urlpath:'/codathon/rest/v0/service/admin',
        idleTime: 120,
        idleWarningTime: 10,
        dashboardmsg: 'Please Wait...Dashboard is Loading',
        waitmsg: 'Please Wait...',
        directivesHtmlPath: 'apps/directives/templates',
        login: '/login/',
        dashboard: '/dashboard/',
        contests: '/contests',
        users: '/users',
        reports: '/reports',
        help: '/help',
        multisites: '/multisites',
        adminContextList: '/admin/contest/list',
        adminContextCreate: '/admin/contest/list/create',
        adminContextCreateSub: '/admin/contest/list/createSub',
        adminContext: '/admin/contest',
        adminDomainList: '/admin/domain/list',
        adminTechList: '/admin/tech/list',
        manageLocations: '/manage/locations',
        manageHost: '/manage/host',       
        manageRoles: '/manage/roles',        
        manageApis: '/manage/apis'
    });
})();
