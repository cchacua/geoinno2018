'use strict';

/**
 * @ngdoc function
 * @name geoinno2018.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geoinno2018
 */
angular.module('geoinno2018')
  .controller('AboutCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
