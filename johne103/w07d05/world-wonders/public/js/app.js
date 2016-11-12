angular
  .module('wonderApp', ['ngResource', 'ui.router'])
  .config(Router);


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
      url: '/wonders/:id',
      templateUrl: '/templates/wondersEdit.html',
      controller: 'WondersEditController as wondersEdit'
    });


  $urlRouterProvider.otherwise('/wonders');
}
