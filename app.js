
// (function() {
	var app = angular.module("myApp", ['ngRoute', 'ngCookies', 'angularLazyImg', 'ng.translate']);

	app.run(function($location, $cookies) {
		console.clear()
		if($cookies.get('isAuthenticated') == undefined) {
			$location.path("/login")
		}
	});

	app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', {
      templateUrl: 'module/login/view/login.html',
      controller: 'LoginController'
    })
    .when('/home', {
      templateUrl: 'module/home/view/home.html',
      controller: 'HomeController'
    })
    .when('/movie', {
      templateUrl: 'module/movie/view/movie.html',
      controller: 'MovieController'
    })
    .when('/about-us', {
      templateUrl: 'module/about-us/view/about-us.html',
      controller: 'AboutUsController'
    })
    .when('/search', {
      templateUrl: 'module/search/view/search.html',
      controller: 'SearchController'
    })
    .otherwise({
      redirectTo: '/login'
    });
	}]);

	app.controller("listController", function($scope) {
	  $scope.genres = ["Action", "Adventure", "Comedi", "Crime", "Historical", "Horror", "Musical", "Sci-Fi", "War", "Martial Arts"];
	  $scope.menus = ["About-Us", "Features", "Categories", "Blog", "Contact Us"];
	});

	app.config(['lazyImgConfigProvider', function(lazyImgConfigProvider){
	  var scrollable = document.querySelector('#scrollable');
	  lazyImgConfigProvider.setOptions({
	    offset: 100, // how early you want to load image (default = 100)
	    errorClass: 'error', // in case of loading image failure what class should be added (default = null)
	    successClass: 'success', // in case of loading image success what class should be added (default = null)
	    onError: function(image){}, // function fired on loading error
	    onSuccess: function(image){}, // function fired on loading success
	    container: angular.element(scrollable) // if scrollable container is not $window then provide it here. This can also be an array of elements.
	  });
	}])

	app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
      changeLanguage: 'Change Language',
      BUTTON_LANG_EN: 'English',
      BUTTON_LANG_ID: 'Indonesian',
      BUTTON_SUBSCRIBE: 'Subscribe',
      BUTTON_SIGN_OUT: 'Sign out',
      BUTTON_SEARCH: 'Seacrh',
      placeholderSeacrh: 'Seacrh',
      contactUs: 'Contact Us',
      quickLinks: 'Quick Links',
      categories: 'Categories',
      readMore: 'Read More',
    });
    $translateProvider.translations('id', {
      changeLanguage: 'Ganti Bahasa',
      BUTTON_LANG_EN: 'Inggris',
      BUTTON_LANG_ID: 'Indonesia',
      BUTTON_SUBSCRIBE: 'Berlangganan',
      BUTTON_SIGN_OUT: 'Keluar',
      BUTTON_SEARCH: 'Cari',
      placeholderSeacrh: 'Cari',
      contactUs: 'Hubungi Kami',
      quickLinks: 'Pintasan',
      categories: 'Kategori',
      readMore: 'Selengkapnya',
    });

    $translateProvider.preferredLanguage('en');

  })
  .controller('TranslateController', ['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };
  }]);
// });