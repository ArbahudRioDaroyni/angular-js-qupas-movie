var temp, like, item;
let user;
app.controller('MovieController', function($scope, $http, $routeParams, $cookies, LoginService) {
	
	// console.log($cookies.getObject('myFavorite').find('tt0367413'));

	$http({method : 'GET',url : 'http://www.omdbapi.com/',params : {apikey : 'b9e64c2', i : $routeParams.t}})
	.then(function (response) {
		$scope.movie = response.data;
		$scope.genre = response.data.Genre.split(',');
	})

	$http({method : 'GET',url : 'http://www.omdbapi.com/',params : {apikey : 'b9e64c2', s : 'sonic'}})
	.then(function (response) {
		$scope.movies = response.data.Search;
	})

	$scope.favorite = function() {
		// item = JSON.parse(localStorage.getItem('favorite'));
		// let user = {
		// 	name: 'qupas',
		// 	favorite: [
		// 		$routeParams.t
		// 	]
		// }
		if (item === null) {
			// localStorage.setItem('favorite', JSON.stringify(user));
			// alert('message?: DOMString')
		} else {
			// item.favorite.push($routeParams.t);
			// localStorage.setItem('favorite', JSON.stringify(item));
			// alert('p')
		}
	}
});