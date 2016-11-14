angular
  .module('wonderApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);


Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('wondersIndex', {
      url: '/wonders',
      templateUrl: '/templates/wondersIndex.html',
      controller: 'WondersIndexController as wondersIndex'
    })
    .state('wondersNew', {
      url: '/wonders/New',
      templateUrl: '/templates/wondersNew.html',
      controller: 'WondersNewController as wondersNew'
    })
    .state('wondersShow', {
      url: '/wonders/:id',
      templateUrl: '/templates/wondersShow.html',
      controller: 'WondersShowController as wondersShow'
    })
    .state('wondersEdit', {
      url: '/wonders/:id/edit',
      templateUrl: '/templates/wondersEdit.html',
      controller: 'WondersEditController as wondersEdit'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    });


  $urlRouterProvider.otherwise('/wonders');
}

Auth.$inject = ['$authProvider'];

function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';
}
