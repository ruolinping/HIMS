var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    $stateProvider.state('Home', {
        url: '/Home',
        templateUrl: 'home.html'
    })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
});



mainApp.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
