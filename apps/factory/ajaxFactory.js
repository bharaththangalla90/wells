(function() {
	'use strict';
	codeathonapp.factory('$ajaxFactory', ['$http', '$q', ajaxFactory]);

	function ajaxFactory($http, $q){
		var apiLoginAuth = '/rest/v0/service/admin/login/';
		var apiAdmin = '/rest/v0/service/admin/view/dashboard/';

		var methods = {
			getDataFromServer:getDataFromServer,
			loginAuthentication:loginAuthentication,
			isAdminUser:isAdminUser
		}
		return methods;
		function getDataFromServer(path, method, params){
			var deferred = $q.defer();
			$http({
				method: method,
				url: path,
				data: JSON.stringify(params)
			})
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject(data);
			});
		  return deferred.promise;
		}
		function loginAuthentication(userObj){
			var deferred = $q.defer();
			$http({
				headers: {
					'content-Type': 'application/json'
				},
				method: 'POST',
				url: apiLoginAuth,
				data: JSON.stringify(userObj)
			})
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject(data);
			});
		  return deferred.promise;
		}

		function isAdminUser(user){
			var deferred = $q.defer();
			$http({
				headers: {
					'content-Type': 'application/json'
				},
				method: 'GET',
				url: apiAdmin +user
			})
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject(data);
			});
			return deferred.promise;
		}
	}
})();