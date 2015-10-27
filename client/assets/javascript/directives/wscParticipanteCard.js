angular
    .module('PartipantApp')
    .directive('wscParticipanteCard', function(){
        return {
            restrict: "E",
            templateUrl: "assets/templates/directives/wscParticipanteCard.html",
            scope: {
                // @ one-way-biding
                // = two-way-binding
                idparticipante: "=",
                username: "=",
                email: "=",
                bio: "="
            },
            controller: function ($scope, $location){
                
            }
        };
    });