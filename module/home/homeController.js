app.controller('HomeController', function($scope, $http) {
	var listPopularMovie = ['tt11127878', 'tt4154796', 'tt4520988', 'tt1201607', 'tt1872181', 'tt4777008', 'tt3794354', 'tt1211837', 'tt9173418', 'tt7713068', 'tt5095030', 'tt10698468'];
	var popularMovie = [];

	for (var x = listPopularMovie.length - 1; x >= 0; x--) {
		$http({method : 'GET',url : 'http://www.omdbapi.com/',params : {apikey : 'b9e64c2', i : listPopularMovie[x]}})
		.then(function (response) {
			popularMovie.push({'id' : response.data.imdbID, 'title' : response.data.Title, 'poster' : response.data.Poster, 'year' : response.data.Year});
		})
	}
	$scope.movies = popularMovie;
});