'use strict';

/**
 * @ngdoc function
 * @name geoinno2018.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geoinno2018
 */
angular.module('geoinno2018')
  .controller('viewscont', ['$scope', '$stateParams', 'db','Excel','$timeout', function($scope, $stateParams, db, Excel, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
      
    $scope.showparallel = false;
    db.getparallel().get()
    .$promise.then(
                function(response) {
                    $scope.parallel = response.parallel.slice(2, response.parallel.length);
                    $scope.showparallel = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });

   $scope.showsessions = false;
    db.getsessions().get()
    .$promise.then(
                function(response) {
                    $scope.sessions = response.sessions.slice(2, response.sessions.length);
                    $scope.showsessions = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });

   $scope.showpapers = false;
    db.getpapers().get()
    .$promise.then(
                function(response) {
                    $scope.papers = response.papers.slice(2, response.papers.length);
                    $scope.showpapers = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });


/**      
    $scope.idprograma = $stateParams.id
    $scope.showprogramas = false;
    $scope.message = "Cargando ...";
    db.getprogramas().get()
    .$promise.then(
                function(response) {
                    $scope.programas = response.programas.slice(2, response.programas.length);
                    $scope.showprogramas = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
**/    

    $scope.author= "";
    $scope.title= "";
    $scope.todaydate = new Date().toISOString();

    $scope.exportToExcel=function(tableId){
        var exportHref=Excel.tableToExcel(tableId,'report');
        var a = document.createElement('a');
        a.href = exportHref;
        a.download = 'Document_GEOINNO2018.xls';
        a.click();
    }
      
}]);
