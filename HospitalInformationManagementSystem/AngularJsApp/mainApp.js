var mainApp = angular.module('mainApp', ['ui.router']);

mainApp..config(function($stateProvider, $urlRouterProvider) {

});



mainApp.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
