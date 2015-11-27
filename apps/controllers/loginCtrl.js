(function() {
    'use strict';

    codeathonapp.controller("loginCtrl", ['$scope', '$ajaxFactory', '$uiRouters', '$location', 'Idle', loginCtrl]);

    function loginCtrl($scope, $ajaxFactory, uiRouters, $location, Idle) {
        $scope.isDisplay = false;
        $scope.errormsg = "";
        $scope.userName = "";
        $scope.userPass = "";


        function validationForm() {
            var validUser = false;
            if ($scope.loginForm.$invalid) {
                if ($scope.loginForm.email.$invalid) {
                    $scope.isNameEmpty = true;
                    validUser = true;
                }
                if ($scope.loginForm.password.$invalid) {
                    $scope.isPwdEmpty = true;
                    validUser = true;
                }
            }
            return validUser;
        };
        $scope.authenticateuser = function() {
            $scope.isDisplay = false;

            if (!validationForm()) {
                var obj = {};
                obj.login = $scope.userName;
                obj.login = $scope.userPass;

                var promise = $ajaxFactory.getDataFromServer(uiRouters.filepath + '/login/response.json', 'POST', obj);
                promise.then(function(d) {
                    if (d.code == "000") {
                        $location.url(uiRouters.dashboard);
                        codeathon.utils.setSessionItem('userId', d.userId);

                    } else {
                        $scope.isDisplay = true;
                        $scope.errormsg = d.desc;
                    }
                });
                promise.catch(function(d) {
                    console.log('catch block executed', d);
                    return d;
                });
                promise.finally(function(d) {
                    console.log('final block executed', d);
                });
            }

        };

    }
})();
