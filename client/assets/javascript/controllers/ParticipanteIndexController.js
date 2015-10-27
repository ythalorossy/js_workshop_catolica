angular.module('PartipantApp').controller('ParticipantesIndexController', function (Participante, $scope){
    $scope.participantes = Participante.query();
    console.log($scope.participantes);
});