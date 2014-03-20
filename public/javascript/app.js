var raceTrackerApp = angular.module('raceTrackerApp', [
  'ngRoute',
  'raceTrackerControllers'
]);
 
raceTrackerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/javascript/partials/race-types.html',
        controller: 'RaceTypeCtrl'
      }).
      when('/races/:raceType', {
        templateUrl: '/javascript/partials/races.html',
        controller: 'RaceListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);