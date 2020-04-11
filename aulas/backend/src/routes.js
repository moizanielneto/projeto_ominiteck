const express = require('express');

const ongcontroller = require("./controllers/ongcontroller");
const incidentcontroller = require("./controllers/incidentcontroller");
const profilecontroller = require("./controllers/profilecontroller");
const sessionController = require('./controllers/sessionController');


const routes = express.Router();

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.post('/sessions', sessionController.create);

routes.get('/profile', profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post("/incidents" ,  incidentcontroller.create);
routes.delete("/incidents/:id" ,  incidentcontroller.delete);

module.exports = routes;