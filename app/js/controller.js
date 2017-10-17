angular.module('ecommerce', ['ngRoute'])
    .controller('BemVindoController', function($scope, $http) {
        $scope.init = function() {

            $scope.listaCategoria = {}

            $http({
                method: 'GET',
                url: '/api/categoria/consultar.php?retornarImagem=sim'
            }).then(function(response) {
                $scope.listaCategoria = response.data;
            });
        }
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/pages/bemvindo.html',
                controller: 'BemVindoController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
