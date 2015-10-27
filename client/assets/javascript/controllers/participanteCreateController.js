angular
    .module('PartipantApp')
    .controller('ParticipantesCreateController', function ($scope, Participante, $location){
    
    $scope.participante = new Participante();
    $scope.isSubmitting = false;
    
    $scope.saveParticipante = function(participante){
        $scope.isSubmitting = true;
        participante.$save().then(function(){
            $location.path('/participantes');   //caso de sucesso
        }).finally(function(){
            $scope.isSubmitting = false;
        });  
    };
});