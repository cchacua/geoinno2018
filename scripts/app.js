'use strict';

/**
 * @ngdoc overview
 * @name geoinno2018
 * @description
 * # geoinno2018
 *
 * Main module of the application.
 */
angular
  .module('geoinno2018', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    // Route for tha index page
    .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'MainCtrl'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

    })
   

/*****************************Beging views***************************/
    
    // Main views
    .state('app.views', {
                url:'views',
                views: {
                    'content@': {
                        templateUrl : 'views/views.html',
                        controller  : 'viewscont'                  
                    }
                }
    })

    // Program
    .state('app.views.program', {
                url:'/program',
                views: {
                    'content@': {
                        templateUrl : 'views/det/program.html',
                        controller  : 'viewscont'                  
                    }
                }
    })
   
/*****************************End views***************************/

    // Route for the about us
    .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutCtrl'                  
                    }
                }
    });

    $urlRouterProvider.otherwise('/');
    
  });
