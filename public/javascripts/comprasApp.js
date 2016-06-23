app = angular.module('ComprasApp', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

// Configuracion de la rutas de la app.
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/lista', {
			templateUrl : 'partials/lista.html',
			controller : 'ListaCtrl'
		})
		.otherwise({
			redirectTo : '/lista'
		});
}]);
