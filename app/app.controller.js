var mean = angular.module("mean", []);


mean.controller('MainController', ['$scope', '$http', function($scope, $http){
	$scope.people = []

	$scope.init = function(){
		$http.get('http://localhost:3000/person/hektor').then(function(result) {
				$scope.people = result.data;
			});
	}


	// populate the feed with result from mongodb
	$scope.init();

}])


