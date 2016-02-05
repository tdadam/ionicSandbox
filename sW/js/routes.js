angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.people', {
      url: '/people',
      views: {
        'side-menu21': {
          templateUrl: 'templates/people.html',
          controller: 'peopleCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.ships', {
      url: '/ships',
      views: {
        'side-menu21': {
          templateUrl: 'templates/ships.html',
          controller: 'shipsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('person', {
      url: '/person',
      templateUrl: 'templates/person.html',
      controller: 'personCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21');

});