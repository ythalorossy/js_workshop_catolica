angular.module('PartipantApp').controller('ParticipantesShowController', function (Participante, $scope, $routeParams, $location){
    $scope.participante = Participante.get({id: $routeParams.id});
    $scope.deleteParticipante = function(participante){
        participante.$remove().then(function(){
            $location.path('/participantes');
        });
    };
});