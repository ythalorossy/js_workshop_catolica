/**
 * https://lodash.com/
 * A JavaScript utility library delivering consistency, modularity, performance, & extras.
 */
var _ = require('lodash');

var participantes = [
  {id:1, username:'ythalorossy', email:'ythalorossy@gmail.com', bio: "Analista de sistemas"}
  ,{id:2, username:'luanna', email:'luanna@gmail.com', bio: "Modelagem 3D, Artes tradicionais"}
  ,{id:3, username:'yoda', email:'yoda.jedi@starwars.sw', bio: "Mestre Jedi humanoide de origem desconhecida"}
];

var lastId = 3;

var buildParticipantes = function() {
  // Make a deep copy so we don't change the main notes array
  var rawParticipantes = JSON.parse(JSON.stringify(participantes));
  var builtParticipantes = [];

  for(var i=0, l = rawParticipantes.length; i < l; i++) {
    builtParticipantes.push(rawParticipantes[i]);
  }
  return builtParticipantes;
};

module.exports = {
  get: function(id) {
    return _.find(buildParticipantes(), function(participante){
      return participante.id === id;
    });
  },
  all: function() {
    return buildParticipantes();
  },
  update: function(participante) {
    var updatedParticipante;
    for(var i=0, l = participantes.length; i < l; i++) {
      if(participantes[i].id === participante.id){
        _.assign(participantes[i], participante);
        updatedParticipante = participantes[i];
        break;
      }
    }
    return updatedParticipante;
  },
  delete: function(id) {
    var deletedNote;
    for(var i=0, l=participantes.length; i < l; i++) {
      if(participantes[i].id === id){
        deletedNote = participantes[i];
        participantes.splice(i, 1);
        break;
      }
    }
    return deletedNote;
  },
  create: function(participante) {
    lastId += 1;
    participante.id = lastId;
    participantes.push(participante)
    return participante;
  }
};