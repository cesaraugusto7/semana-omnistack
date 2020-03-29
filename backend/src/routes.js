const express = require('express');
const OngCOntroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();



routes.post('/sessions',SessionController.create)

// função assincrona de listar ongs
routes.get('/ongs', OngCOntroller.index);

// função assincrona de criar ongs
routes.post('/ongs', OngCOntroller.create);

// função assincrona de criar incidents
routes.post('/incidents', IncidentController.create);

// função assincrona de listar todos incidents
routes.get('/incidents', IncidentController.index);

// função assincrona de listar todos incidents de uma determinada ong
routes.delete('/incidents/:id', IncidentController.delete);

// função assincrona de listar todos incidents de uma determinada ong
routes.get('/profile', ProfileController.index);




module.exports = routes; 