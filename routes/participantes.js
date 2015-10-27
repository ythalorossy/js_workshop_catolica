var express = require('express');
var router = express.Router();
var Participante = require("../models/participante");

// middleware específico para este router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define a rota para a home page
router.get('/', function(request, response) {
  response.json(Participante.all());
});

// GET /participantes/:id
router.get('/:id', function(request, response) {
  response.json(Participante.get(parseInt(request.params.id, 10)));
});

// PUT /participantes/:id
router.put('/:id', function(request, response){
  response.json(Participante.update(request.body));
});

// DELETE /participantes/:id
router.delete('/:id', function(request, response){
  response.json(Participante.delete(parseInt(request.param('id'), 10)) || {});
});

// POST /participantes
router.post('/', function(request, response) {
  response.json(Participante.create(request.body));
})


module.exports = router;