angular.module('PartipantApp').factory('Participante', function ($resource){
  return $resource('/participantes/:id', {id: "@id"}, {
    update : {
      method: "PUT"
    }
  });
});