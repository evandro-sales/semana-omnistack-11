const express = require('express');

const OngController = require('./controller/OngController');
const IncedentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncedentController.index);
routes.post('/incidents', IncedentController.create);
routes.delete('/incidents/:id', IncedentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;