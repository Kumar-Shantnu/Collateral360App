// Define all your modules with no dependencies
angular.module('LoginApp', []);
angular.module('DashBoardApp', []);


// Lastly, define your "main" module and inject all other modules as dependencies
angular.module('Collateral360',
  [
    'ngRoute',
    'LoginApp',
    'DashBoardApp'
   
  ]
);