

app.controller('ListaCtrl', ['$scope', '$resource', 
	function($scope, $resource){
		
		var Lista = $resource('/api/lista');
		Lista.query(function(items){
			$scope.items = items;
		});

		$scope.nombre ="";
		$scope.cantidad="";

		$scope.agregar = function(){
			var nuevo = { nombre : $scope.nombre, cantidad : $scope.cantidad, comprado: false };
			var Item = $resource('/api/lista');
			Item.save(nuevo, function(){
				//$location.path('/lista');
				$scope.items.push(nuevo);
				$scope.nombre ="";
				$scope.cantidad="";
			});
		}

}]);



app.controller('HeaderController', ['$scope','$location',
 	function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
        		return $location.path().indexOf(viewLocation) == 0; 
		};
	}]);
