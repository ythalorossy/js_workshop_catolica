angular.module('PartipantApp').config(function($routeProvider) {

  $routeProvider
    .when('/', {
      redirectTo: '/participantes'
    })
    
    .when('/participantes', {
      templateUrl: "assets/templates/participants/index.html",
      controller: "ParticipantesIndexController"
    })
    
    .when('/participantes/new', {
      templateUrl: "assets/templates/participants/new.html",
      controller: "ParticipantesCreateController"
    })    
    
    .when('/participantes/:id', {
      templateUrl: "assets/templates/participants/show.html",
      controller: "ParticipantesShowController"
    })    
    
    .when('/participantes/:id/edit', {
      templateUrl: "assets/templates/participants/edit.html",
      controller: "ParticipantesEditController"
    })
    
    .otherwise({ redirectTo: '/'});
});