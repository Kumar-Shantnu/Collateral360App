angular.module('Collateral360')
  .config(
    ['$routeProvider',
      function ($routeProvider) {
          $routeProvider
            .when('/landingPage', {
                templateUrl: 'modules/login/views/landingPage.html',
                controller: 'LoginCtrl'
            })
          .when('/dashBoard', {
              templateUrl: 'modules/dashboard/views/dashBoard.html',
              controller: 'DashBoardCtrl'
          }).
          when('/', {
              templateUrl: 'modules/login/views/landingPage.html',
              controller: 'LoginCtrl'

          }).
          otherwise({

              redirecTo: '/'
          })
      }]);