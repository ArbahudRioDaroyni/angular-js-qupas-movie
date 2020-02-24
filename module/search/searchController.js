var temp = []
var page = 1

app.controller('SearchController', function($scope, $http, $routeParams) {
	$scope.loadMore = true

	$http({method : 'GET',url : 'http://www.omdbapi.com/',params : {apikey : 'b9e64c2', s : $routeParams.q, page : page}})
	.then(function (response) {
		if (response.data.Response) {
			$scope.movies = response.data.Search
			temp.push($scope.movies)
		}
	})

  // this function fetches a random text and adds it to array
  $scope.more = function() {
  	page += 1
    $http({method : 'GET',url : 'http://www.omdbapi.com/',params : {apikey : 'b9e64c2', s : $routeParams.q, page : page}})
    .then(function(response){
      if (response.data.Response == 'True') {
      	for (line in response.data.Search) {
      		temp[0].push(response.data.Search[line])
      		$scope.movies = temp[0]
      	}
			} else {
				$scope.loadMore = false
			}
    })
  }
})

app.directive("whenScrolled", function(){

  return{
    
    restrict: 'A',
    link: function(scope, elem, attrs){
    
      // we get a list of elements of size 1 and need the first element
      raw = elem[0]
    
      // we load more elements when scrolled past a limit
      elem.bind("scroll", function(){
        if(raw.scrollTop+raw.offsetHeight+5 >= raw.scrollHeight){
          scope.loading = true
          
        // we can give any function which loads more elements into the list
          scope.$apply(attrs.whenScrolled)
        }
      })
    }
  }
})