var raceTrackerControllers = angular.module('raceTrackerControllers', []);
 
raceTrackerControllers.controller('RaceListCtrl', ['$scope', '$http', function ($scope, $http) {
	var raceType = 'CX'; // TODO: Figure out how to get this param
	$http.get('/races/' + raceType).success(function(data) {
      $scope.races = data.races;
    });
}]);

raceTrackerControllers.controller('RaceTypeCtrl', ['$scope', function ($scope) {
  $scope.raceTypes = [{name:'MTB'},{name:'CX'}];
}]);