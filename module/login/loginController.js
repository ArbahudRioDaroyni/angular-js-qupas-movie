app.controller('LoginController', function($scope, $location, LoginService) {
	$scope.formSubmit = function() {
		if(LoginService.login($scope.username, $scope.password)) {
			$scope.username = 'qupas';
			$scope.password = '';
			$scope.error = '';
			$location.path("/home").search({user: $scope.username});
		} else {
			$scope.error = "Incorrect username / password !";
		}
	};
});