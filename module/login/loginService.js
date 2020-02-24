var app = angular.module('myApp');
app.factory('LoginService', function($cookies) {
	var admin = 'qupas';
	var pass = '12345678';
	var isAuthenticated = false;

	return {
		login : function(username, password) {
			isAuthenticated = username === admin && password === pass;
			$cookies.put('isAuthenticated', isAuthenticated);
			return isAuthenticated;
		},
		isAuthenticated: function(){
			return isAuthenticated;
		}
	};
});