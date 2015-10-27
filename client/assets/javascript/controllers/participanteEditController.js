angular.module('PartipantApp').controller('ParticipantesEditController', function (Participante, $scope, $routeParams, $location){
    $scope.participante = Participante.get({id: $routeParams.id});
    $scope.isSubmitting = false;
    console.log($scope.participante);
    $scope.saveParticipante = function(participante){
        $scope.isSubmitting = true;
        participante.$update().finally(function(){
            $scope.isSubmitting = false;
            $location.path("/participantes/" + participante.id);
        });
    }
});