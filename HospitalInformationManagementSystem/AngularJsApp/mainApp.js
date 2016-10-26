var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    $stateProvider.state('Home', {
        url: '/Home',
        templateUrl: 'home.html'
    })

         .state('Login', {
             url: '/Login',
             templateUrl:'login.html'
         });
});

mainApp.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

mainApp.controller('loginController', function ($scope, $location, AuthenticationService) {

    $scope.login= function(){
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                $location.path('/home.html');
            } else {
                $scope.error = response.message;
                $scope.dataLoading = false;
            }
        });
    }
});

mainApp.factory('AuthenticationService', ['$http', '$cookies', '$rootScope', '$timeout',
    function ($http, $cookies, $rootScope, $timeout) {
        var service = {};
        service.Login = function (username, password, callback) {
            $http.post('/api/authenticate', { username: username, password: password })
                .success(function (response) {
                    callback(response);
                }).error(function (error) { response.message = 'Username or password is incorrect'; });

        };
    }
])